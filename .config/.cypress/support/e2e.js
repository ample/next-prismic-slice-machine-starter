// https://on.cypress.io/configuration
// ---------------------------------------------------------

const COMMAND_DELAY = 1000

// ---------------------------------------------------------

for (const command of ['window']) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args)

    // eslint-disable-next-line no-undef
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(origVal)
      }, COMMAND_DELAY)
    })
  })
}
