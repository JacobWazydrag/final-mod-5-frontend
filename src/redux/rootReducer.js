export default (state = {}, { type, payload }) => {
    switch (type) {
      case 'SET_STUDENT':
        return payload;
      case 'CLEAR_STUDENT':
        return {};
        case 'SET_ARTIST':
          return payload;
          case 'CLEAR_ARTIST':
            return {};
            case 'GET_LESSONS':
              return payload;
            case 'SET_LESSONS':
              return payload;
      default:
        return state;
    }
  };