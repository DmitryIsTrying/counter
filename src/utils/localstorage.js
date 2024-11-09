export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return { startInc: 0, endInc: 1 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { startInc: 0, endInc: 1 };
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {}
};
