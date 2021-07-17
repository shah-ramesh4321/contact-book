// import {CREATE_CONTACT, GET_CONTACT} from '../actions/contactAction'

const initialState = {
  contacts: [
    {
      id: 1,
      fName: "Deepak",
      lName: "Goit",
      officePhone: 1111111111,
      residentialPhone: 2222222222,
      city: "Delhi",
      country: "India",
      address: "H219,sector-53",
    },
    {
      id: 2,
      fName: "Shyam",
      lName: "Kumar",
      officePhone: 1111111123,
      residentialPhone: 2222222232,
      city: "Delhi",
      country: "India",
      address: "H219,sector-53",
    },
    {
      id: 3,
      fName: "Ram",
      lName: "Kumar",
      officePhone: 1111111112,
      residentialPhone: 2222222234,
      city: "Delhi",
      country: "India",
      address: "H219,sector-53",
    },
    {
      id: 4,
      fName: "Roshan",
      lName: "Mandal",
      officePhone: 1111111112,
      residentialPhone: 2222222234,
      city: "Delhi",
      country: "India",
      address: "H219,sector-53",
    },
    {
      id: 5,
      fName: "Suman",
      lName: "Yadav",
      officePhone: 1111111112,
      residentialPhone: 2222222234,
      city: "Delhi",
      country: "India",
      address: "H219,sector-53",
    },
    {
      id: 6,
      fName: "Aman",
      lName: "Jha",
      officePhone: 1111111112,
      residentialPhone: 2222222234,
      city: "Delhi",
      country: "India",
      address: "H219,sector-53",
    },
  ],
  contact: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "GET_CONTACT": {
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    }

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    default:
      return state;
  }
};
