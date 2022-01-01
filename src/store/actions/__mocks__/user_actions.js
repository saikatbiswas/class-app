module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    userLogin: jest.fn().mockReturnValue({ type: 'mock' })
}