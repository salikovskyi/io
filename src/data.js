const Users = {
    userq: [
      {
        id: 1,
        title: "ІВАН",
      },
      {
        id: 2,
        title: "ВАСЯ",
      },
      {
        id: 3,
        title: "ПЕТРО",
      },
      {
        id: 4,
        title: "МАРИНА",
      },
      {
        id: 5,
        title: "САНЯ",
      },
      {
        id: 6,
        title: "МІША",
      },
    ],
    getUsers: function () {
      return (
        (localStorage.getItem("theUsers") &&
          JSON.parse(localStorage.getItem("theUsers"))) ||
        this.userq
      );
    },
    saveUsers: (user) => {
      localStorage.setItem("theUsers", JSON.stringify(user));
    },
  };
  
  export default Users;