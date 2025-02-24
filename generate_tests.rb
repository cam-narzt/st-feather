#!/usr/bin/env ruby

def capitalize(str)
  str.split('-').map(&:capitalize).join
end

def generate_e2e(icon)
  content = <<-BODY.chomp
import { newE2EPage } from '@stencil/core/testing';

describe('icon-#{icon}', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon}></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon} stroke="blue"></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-#{icon} > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-#{icon} stroke-width="2"></icon-#{icon}>');

    const element = await page.find('icon-#{icon}');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-#{icon} > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});

BODY
end

def generate_spec(icon)
  content = <<-BODY.chomp
import { newSpecPage } from '@stencil/core/testing';
import { Icon#{capitalize(icon)} } from '../#{icon}';
import { createElement, #{capitalize(icon)} }  from 'lucide';

describe('icon-#{icon}', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon#{capitalize(icon)}],
      html: `<icon-#{icon}></icon-#{icon}>`,
    });

    const svg = createElement(#{capitalize(icon)});

    expect(page.root).toEqualHtml(`
      <icon-#{icon} class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-#{icon}>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [Icon#{capitalize(icon)}],
      html: `<icon-#{icon} stroke="blue"></icon-#{icon}>`,
    });

    const svg = createElement(#{capitalize(icon)});
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-#{icon} class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-#{icon}>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [Icon#{capitalize(icon)}],
      html: `<icon-#{icon} stroke-width="2"></icon-#{icon}>`,
    });

    const svg = createElement(#{capitalize(icon)});
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-#{icon} class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-#{icon}>
    `);
  });
});

BODY
end

icons = %W(activity airplay alarm-check alarm-clock-off alarm-clock alarm-minus alarm-plus album alert-circle alert-octagon alert-triangle align-center align-justify align-left align-right anchor aperture archive arrow-big-down arrow-big-left arrow-big-right arrow-big-up arrow-down-circle arrow-down-left arrow-down-right arrow-down arrow-left-circle arrow-left-right arrow-left arrow-right-circle arrow-right arrow-up-circle arrow-up-left arrow-up-right arrow-up asterisk at-sign award axe banknote bar-chart-2 bar-chart battery-charging battery-full battery-low battery-medium battery beaker bell-minus bell-off bell-plus bell-ring bell bike binary bitcoin bluetooth-connected bluetooth-off bluetooth-searching bluetooth bold book-open book bookmark-minus bookmark-plus bookmark bot box-select box briefcase brush bug building bus calculator calendar camera-off camera car carrot cast check-circle-2 check-circle check-square check chevron-down chevron-first chevron-last chevron-left chevron-right chevron-up chevrons-down-up chevrons-down chevrons-left chevrons-right chevrons-up-down chevrons-up chrome circle-slashed circle clipboard-check clipboard-copy clipboard-list clipboard-x clipboard clock-1 clock-10 clock-11 clock-12 clock-2 clock-3 clock-4 clock-5 clock-6 clock-7 clock-8 clock-9 clock cloud-drizzle cloud-fog cloud-hail cloud-lightning cloud-moon cloud-off cloud-rain-wind cloud-rain cloud-snow cloud-sun cloud cloudy clover code-2 code codepen codesandbox coffee coins columns command compass contact contrast copy copyleft copyright corner-down-left corner-down-right corner-left-down corner-left-up corner-right-down corner-right-up corner-up-left corner-up-right cpu credit-card crop cross crosshair crown currency database delete disc divide-circle divide-square divide dollar-sign download-cloud download dribbble droplet droplets drumstick edit-2 edit-3 edit egg equal-not equal euro expand external-link eye-off eye facebook fast-forward feather figma file-check-2 file-check file-code file-digit file-input file-minus-2 file-minus file-output file-plus-2 file-plus file-search file-text file-x-2 file-x file files film filter flag-triangle-left flag-triangle-right flag flame flashlight-off flashlight flask-conical flask-round folder-minus folder-open folder-plus folder form-input forward framer frown function-square gamepad-2 gamepad gauge gavel gem ghost gift git-branch-plus git-branch git-commit git-merge git-pull-request github gitlab glasses globe-2 globe grab graduation-cap grid grip-horizontal grip-vertical hammer hand-metal hand hard-drive hard-hat hash haze headphones heart help-circle hexagon highlighter history home image-minus image-off image-plus image import inbox indent indian-rupee infinity info inspect instagram italic japanese-yen key landmark languages laptop-2 laptop lasso-select lasso layers layout-dashboard layout-grid layout-list layout-template layout library life-buoy lightbulb-off lightbulb link-2-off link-2 link linkedin list-checks list-minus list-ordered list-plus list-x list loader-2 loader locate-fixed locate lock log-in log-out mail map-pin map maximize-2 maximize megaphone meh menu message-circle message-square mic-off mic minimize-2 minimize minus-circle minus-square minus monitor-off monitor-speaker monitor moon more-horizontal more-vertical mountain-snow mountain mouse-pointer-2 mouse-pointer-click mouse-pointer move-diagonal-2 move-diagonal move-horizontal move-vertical move music navigation-2 navigation network octagon option outdent package palette paperclip pause-circle pause-octagon pause pen-tool pencil percent person-standing phone-call phone-forwarded phone-incoming phone-missed phone-off phone-outgoing phone pie-chart piggy-bank pin pipette plane play-circle play plug-zap plus-circle plus-square plus pocket podcast pointer pound-sterling power-off power printer qr-code quote radio-receiver radio redo refresh-ccw refresh-cw regex repeat-1 repeat reply-all reply rewind rocking-chair rotate-ccw rotate-cw rss ruler russian-ruble save scale scan-line scan scissors screen-share-off screen-share search send separator-horizontal separator-vertical server-crash server-off server settings-2 settings share-2 share sheet shield-alert shield-check shield-close shield-off shield shirt shopping-bag shopping-cart shovel shrink shuffle sidebar-close sidebar-open sidebar sigma signal-high signal-low signal-medium signal-zero signal skip-back skip-forward skull slack slash sliders smartphone-charging smartphone smile snowflake sort-asc sort-desc speaker sprout square star-half star stop-circle strikethrough subscript sun sunrise sunset superscript swiss-franc switch-camera table tablet tag target tent terminal-square terminal thermometer-snowflake thermometer-sun thermometer thumbs-down thumbs-up ticket timer-off timer-reset timer toggle-left toggle-right tornado trash-2 trash trello trending-down trending-up triangle truck tv-2 tv twitch twitter type umbrella underline undo unlink-2 unlink unlock upload-cloud upload user-check user-minus user-plus user-x user users verified vibrate video-off video view voicemail volume-1 volume-2 volume-x volume wallet wand watch webcam wifi-off wifi wind wrap-text wrench x-circle x-octagon x-square x youtube zap-off zap zoom-in zoom-out)
icons.each do |icon|
  e2e_file = File.join(File.dirname(__FILE__), "src", "components", "test", "#{icon}.e2e.ts")
  File.open(e2e_file, 'w') do |f|
    puts "Generating e2e test for #{icon} in #{e2e_file}..."
    f.write(generate_e2e(icon))
    f.flush
  end
  spec_file = File.join(File.dirname(__FILE__), "src", "components", "test", "#{icon}.spec.tsx")
  File.open(spec_file, 'w') do |f|
    puts "Generating spec test for #{icon} in #{spec_file}..."
    f.write(generate_spec(icon))
    f.flush
  end
end
