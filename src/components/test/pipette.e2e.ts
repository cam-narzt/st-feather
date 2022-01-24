import { newE2EPage } from '@stencil/core/testing';

describe('icon-pipette', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pipette></icon-pipette>');

    const element = await page.find('icon-pipette');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pipette stroke="blue"></icon-pipette>');

    const element = await page.find('icon-pipette');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pipette > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pipette stroke-width="2"></icon-pipette>');

    const element = await page.find('icon-pipette');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pipette > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
