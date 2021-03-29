import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-right-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-right-circle></icon-arrow-right-circle>');

    const element = await page.find('icon-arrow-right-circle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-right-circle stroke="blue"></icon-arrow-right-circle>');

    const element = await page.find('icon-arrow-right-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-right-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-right-circle stroke-width="2"></icon-arrow-right-circle>');

    const element = await page.find('icon-arrow-right-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-right-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});