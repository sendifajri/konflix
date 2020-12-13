import React, { useState } from "react";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import SearchInput from "../../components/SearchInput";
import useDelay from "../../hooks/useDelay";
import { movieActions, movieActionsLoading } from "../../actions/movieActions";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const { Title } = Typography;

const HomeHeader = () => {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string | undefined>(
    query.get("s") || undefined
  );

  useDelay({
    loadingAction: () => dispatch(movieActionsLoading()),
    action: () => {
      dispatch(movieActions({ search: search || "batman", page: 1 }));
    },
  });

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (search !== undefined) {
      history.replace(`?s=${search}`);
    }
    setSearch(e.target.value);
  };

  return (
    <>
      <Title level={1}>Find your favorite movie</Title>
      <SearchInput
        value={search}
        placeholder="Ex 'Batman'"
        onChange={onSearch}
      />
    </>
  );
};

export default HomeHeader;
