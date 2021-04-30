import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevron-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-left></icon-chevron-left>');

    const element = await page.find('icon-chevron-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-left stroke="blue"></icon-chevron-left>');

    const element = await page.find('icon-chevron-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevron-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-left stroke-width="2"></icon-chevron-left>');

    const element = await page.find('icon-chevron-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevron-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
