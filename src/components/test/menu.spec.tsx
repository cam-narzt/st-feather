import { newE2EPage } from '@stencil/core/testing';

describe('icon-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-menu></icon-menu>');

    const element = await page.find('icon-menu');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-menu stroke="blue"></icon-menu>');

    const element = await page.find('icon-menu');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-menu > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-menu stroke-width="2"></icon-menu>');

    const element = await page.find('icon-menu');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-menu > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
