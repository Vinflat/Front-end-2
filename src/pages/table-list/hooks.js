import { useEffect, useState } from "react";
// import { getApartments } from "../../api/Apartments";
import {
  createBuildingJsonApi,
  getBuildings,
  updateBuildingJsonApi,
} from "../../api/Buildings";
import { getUsers, deleteAccount, createAccount } from "../../api/Accounts";
import { getFlats } from "../../api/Flats";
import { createContractJsonApi, getContracts } from "../../api/Contracts";
import { createRenter, getRenters, deleteRenter } from "../../api/Renters";
import { getAreas } from "../../api/Areas";
import { getInvoices } from "../../api/Invoices";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    getUsers().then((result) => {
      const data = result.map((user) => ({
        ...user,
        userName: user.username,
        id: user.AccountId,
        RoleId: user.Role.RoleId,
      }));
      setUsers(data);
    });
  }
  const addUser = (user) => {
    createAccount(user).then(() => {
      getUserList();
    });
  };

  const removeUser = (user) => {
    deleteAccount(user);
  };
  return {
    data: users,
    addUser,
    removeUser,
  };
};
export const useAreas = () => {
  const [areas, setAreas] = useState([]);
  useEffect(() => {
    getAreas().then((result) => {
      setAreas(result?.resultList);
    });
  }, []);
  return areas;
};

// export const useApartment = () => {
//     const [apartments, setApartments] = useState([]);
//     useEffect(() => {
//         getApartments().then((result) => {
//             const data = result.map((apartment) => ({
//                 ...apartment,
//                 id: apartment.$id,
//             }));
//             setApartments(data);
//         })

//     }, [])
//     return apartments;
// }

export const useBuildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getBuildings().then((result) => {
      const data = result.map((building) => ({
        ...building,
        id: building.BuildingId,
      }));
      setBuildings(data);
    });
  }, []);
  const createBuilding = async (building) => {
    try {
      await createBuildingJsonApi(building);
    } catch (err) {
      setError(err);
    }
    getBuildings().then((result) => {
      const data = result.map((building) => ({
        ...building,
        id: building.BuildingId,
      }));
      setBuildings(data);
    });
  };
  const updateBuilding = async (building) => {
    try {
      await updateBuildingJsonApi(building);
    } catch (err) {
      setError(err);
    }
    getBuildings().then((result) => {
      const data = result.map((building) => ({
        ...building,
        id: building.BuildingId,
      }));
      setBuildings(data);
    });
  };
  return [buildings, createBuilding, updateBuilding, error];
};

export const useFlats = () => {
    const [flats, setFlats] = useState([]);
  useEffect(() => {
    getFlatList();
  }, []);

  const getFlatList = () => {
    getFlats().then((result) => {
      const data = result?.map((flat) => ({
        ...flat,
        id: flat.FlatId,
      }));
      setFlats(data);
    });
  }
  const insertFlat = (flat) => {
    createFlat(flat).then(() => {
      getFlatList();
    })
  }

    const removeFlat = (flat) => {
        deleteFlat(flat.FlatId);
    }
    return {
        data: flats,
        insertFlat,
        removeFlat,
    };
}

export const useContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getContracts().then((result) => {
      const data = result?.map((contract) => ({
        ...contract,
        id: contract.contractId,
      }));
      setContracts(data);
    });
  }, []);

  const createContract = async (contract) => {
    try {
      await createContractJsonApi(contract);
    } catch (err) {
      setError(err);
    }

    getContracts().then((result) => {
      const data = result?.map((contract) => ({
        ...contract,
        id: contract.contractId,
      }));
      setContracts(data);
    });
  };
  return [contracts, createContract, error];
};

export const useRenters = () => {
  const [renters, setRenters] = useState([]);
  useEffect(() => {
    getRenters().then((result) => {
      const data = result?.map((renter) => {
        return {
          ...renter,
          id: renter.RenterId,
          BirthDate: new Date(renter.BirthDate).toLocaleDateString(),
        };
      });
      setRenters(data);
    });
  }, []);

  const addRenter = (renter) => {
    createRenter(renter);
  };

  const removeRenter = (renter) => {
    deleteRenter(renter);
  };

  return {
    data: renters,
    addRenter,
    removeRenter,
  };
};


export const useInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [income, setIncome] = useState([]);
  const [outCome, setOutCome] = useState([]);
  useEffect(() => {
    getInvoices().then((result) => {
      const data = result?.map((invoice) => {
        return {
          ...invoice,
          id: invoice.InvoiceId,
          CreatedTime: new Date(invoice.CreatedTime).toLocaleDateString()
        };
      });
      setInvoices(data);
      setIncome(data.filter(item => item.InvoiceTypeId === 1))
      setOutCome(data.filter(item => item.InvoiceTypeId === 2))
    });
  }, []);

  return {
    data: invoices,
    income,
    outCome,
  };
};
