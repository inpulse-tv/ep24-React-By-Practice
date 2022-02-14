export interface IDataRow {
  jour: number;
  Nom: string;
  Description: string;
  Vegan: boolean;
}

function api() {
  const getEntreesDuJour = () => {
    return fetch("http://localhost:8000/api/entreesdujour", {
      method: "GET",
    }).then((res) => res.json());
  };

  return {
    getEntreesDuJour,
  };
}

export default api();
