export const appTypes = {
  A: `A`,
  B: `B`,
};

export const appActions = {
  testAction: () => ({
    type: appTypes.A
  }),
  testActionWithPayload: (data) => ({
    type: appTypes.B,
    payload: data
  })
}