import { Image } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import { useHistory } from "react-router-dom";
import { notfound } from "../../components/MovieCard";
import { useQuery } from "../../hooks/useQuery";

const PreviewPoster = () => {
  const history = useHistory();
  const query = useQuery();
  const url = query.get("url");

  return (
    <Modal
      centered
      visible={true}
      footer={false}
      onCancel={() => history.goBack()}
      bodyStyle={{ padding: 0 }}
    >
      {url && (
        <Image fallback={notfound} src={url} alt="Preview" width="100%" />
      )}
    </Modal>
  );
};

export default PreviewPoster;
