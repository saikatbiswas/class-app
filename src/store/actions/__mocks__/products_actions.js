module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    productBySort: jest.fn().mockReturnValue({ type: 'mock' })
}