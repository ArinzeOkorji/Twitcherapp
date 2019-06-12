import { RoutingmoduleModule } from './routingmodule.module';

describe('RoutingmoduleModule', () => {
  let routingmoduleModule: RoutingmoduleModule;

  beforeEach(() => {
    routingmoduleModule = new RoutingmoduleModule();
  });

  it('should create an instance', () => {
    expect(routingmoduleModule).toBeTruthy();
  });
});
