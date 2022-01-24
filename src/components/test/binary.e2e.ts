import { newE2EPage } from '@stencil/core/testing';

describe('icon-binary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-binary></icon-binary>');

    const element = await page.find('icon-binary');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-binary stroke="blue"></icon-binary>');

    const element = await page.find('icon-binary');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-binary > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-binary stroke-width="2"></icon-binary>');

    const element = await page.find('icon-binary');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-binary > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
