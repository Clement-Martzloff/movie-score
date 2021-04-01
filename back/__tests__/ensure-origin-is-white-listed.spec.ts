import ensureOriginIsWhiteListed from '../src/infra/express-app/ensure-origin-is-white-listed';

const headerMockFn = jest.fn();
const requestMock: any = {
  header: headerMockFn
};
const callBackMock = jest.fn();

describe('Use ensure-origin-is-white-listed :', () => {
  it('Allows the api to be requested from a listed domain.', () => {
    headerMockFn.mockImplementationOnce(() => 'http://localhost:3000');
    ensureOriginIsWhiteListed(requestMock, callBackMock);

    expect(callBackMock).toHaveBeenCalledWith(null, { origin: true });
  });

  it('Disallows the api to be requested from a non listed domain.', () => {
    headerMockFn.mockImplementationOnce(() => 'protocol://unknown');
    ensureOriginIsWhiteListed(requestMock, callBackMock);

    expect(callBackMock).toHaveBeenCalledWith(null, { origin: false });
  });
});
