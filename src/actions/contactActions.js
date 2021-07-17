//actions
export const addContact = (contact) => {
    return {
      type: "CREATE_CONTACT",
      payload: contact,
    };
  };
  
  //get a contract
  
  export const getContact = (id) => ({
    type: "GET_CONTACT",
    payload: id,
  });
  
  //delete contact
  export const deleteContact = (id)=>({
      type:"DELETE_CONTACT",
      payload:id,
  })