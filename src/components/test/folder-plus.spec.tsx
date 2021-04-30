import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-plus></icon-folder-plus>');

    const element = await page.find('icon-folder-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-plus stroke="blue"></icon-folder-plus>');

    const element = await page.find('icon-folder-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-plus stroke-width="2"></icon-folder-plus>');

    const element = await page.find('icon-folder-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
