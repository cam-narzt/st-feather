import { newE2EPage } from '@stencil/core/testing';

describe('icon-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout></icon-layout>');

    const element = await page.find('icon-layout');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout stroke="blue"></icon-layout>');

    const element = await page.find('icon-layout');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-layout > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout stroke-width="2"></icon-layout>');

    const element = await page.find('icon-layout');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-layout > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});