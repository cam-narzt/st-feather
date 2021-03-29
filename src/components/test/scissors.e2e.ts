import { newE2EPage } from '@stencil/core/testing';

describe('icon-scissors', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scissors></icon-scissors>');

    const element = await page.find('icon-scissors');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scissors stroke="blue"></icon-scissors>');

    const element = await page.find('icon-scissors');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-scissors > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scissors stroke-width="2"></icon-scissors>');

    const element = await page.find('icon-scissors');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-scissors > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
