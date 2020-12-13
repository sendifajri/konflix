import React, { useState } from "react";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import SearchInput from "../../components/SearchInput";
import DelayHandling from "../../utils/delayHandling";
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

  DelayHandling({
    loadingAction: () => dispatch(movieActionsLoading()),
    action: () => {
      if (search !== undefined) {
        history.replace(`?s=${search}`);
      }
      dispatch(movieActions({ search: search || "batman", page: 1 }));
    },
  });

  return (
    <>
      <Title level={1}>Find your favorite movie</Title>
      <SearchInput
        value={search}
        placeholder="Ex 'Batman'"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </>
  );
};

export default HomeHeader;
