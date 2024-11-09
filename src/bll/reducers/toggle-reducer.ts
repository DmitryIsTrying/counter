export const toggleReducer = (
  state: boolean = false,
  action: ActionsType
): boolean => {
  switch (action.type) {
    case 'SWITCH': {
      return !state;
    }
    default:
      return state;
  }
};
export const switchAC = () => {
  return { type: 'SWITCH' };
};

type SwitchType = ReturnType<typeof switchAC>;

type ActionsType = SwitchType;
