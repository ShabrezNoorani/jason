// Blog posts. To add a post, copy one object below and edit it.
// - slug: lowercase-with-hyphens, used in the URL (/blog/<slug>), must be unique
// - date: YYYY-MM-DD, posts are listed newest first
// - draft: true shows a "DRAFT" label; set to false once reviewed
// - body: list of blocks, each { type: 'h2' | 'p' | 'list', text | items }

export const posts = [
  {
    title: 'How to Read a Balance Sheet Quickly',
    slug: 'how-to-read-a-balance-sheet-quickly',
    date: '2026-10-29',
    draft: true,
    excerpt:
      'A practical order of operations for getting the essentials out of a balance sheet in a few minutes: structure, liquidity, leverage and what to check in the notes.',
    body: [
      {
        type: 'p',
        text: 'A balance sheet is a snapshot of what a company owns, what it owes and what is left for shareholders at a single point in time. You do not need to read every line to understand it. A consistent routine gets you to the important questions quickly.',
      },
      { type: 'h2', text: 'Start with the equation' },
      {
        type: 'p',
        text: 'Every balance sheet follows the same identity: assets equal liabilities plus equity. Before looking at detail, note the size of each of the three blocks. A company funded mainly by equity has a very different risk profile from one funded mainly by debt.',
      },
      { type: 'h2', text: 'Separate current from non-current' },
      {
        type: 'p',
        text: 'Current items are expected to turn into cash, or be paid, within twelve months. Non-current items are longer term. Comparing current assets with current liabilities tells you whether the business can meet its short-term obligations.',
      },
      {
        type: 'list',
        items: [
          'Working capital: current assets minus current liabilities.',
          'Current ratio: current assets divided by current liabilities.',
          'Quick ratio: current assets excluding inventory, divided by current liabilities. It shows liquidity without relying on selling stock.',
        ],
      },
      { type: 'h2', text: 'Check the leverage' },
      {
        type: 'p',
        text: 'Add up short-term and long-term borrowings and compare them with equity (debt-to-equity) or with cash (net debt). Then look at when the debt is due. A large amount maturing within a year matters more than the same amount due in ten years.',
      },
      { type: 'h2', text: 'Look at the quality of the assets' },
      {
        type: 'p',
        text: 'Not all assets are equally solid. Cash is cash. Receivables depend on customers paying. Inventory depends on being sold. Goodwill and other intangibles arise largely from acquisitions and accounting judgement, and they cannot usually be sold separately. A balance sheet dominated by intangibles deserves a closer look at the notes.',
      },
      { type: 'h2', text: 'Always compare periods' },
      {
        type: 'p',
        text: 'One balance sheet tells you little on its own. Put two or more periods side by side and look for the lines that moved most. Questions worth asking include: did receivables or inventory grow faster than sales, did cash fall while debt rose, and did equity change for reasons other than profit and dividends?',
      },
      { type: 'h2', text: 'Finish with the notes' },
      {
        type: 'p',
        text: 'The notes explain accounting policies, debt terms, lease commitments, contingent liabilities and anything off the face of the statement. A quick skim of the notes for the largest balances is often where the real insight is.',
      },
    ],
  },
  {
    title: 'Building a Simple DCF Model in Excel',
    slug: 'building-a-simple-dcf-model-in-excel',
    date: '2026-10-22',
    draft: true,
    excerpt:
      'A step-by-step outline of a discounted cash flow model: forecasting free cash flow, choosing a discount rate, estimating terminal value and testing your assumptions.',
    body: [
      {
        type: 'p',
        text: 'A discounted cash flow (DCF) model values a business as the present value of the cash it is expected to generate. The mechanics are straightforward. The skill lies in making assumptions you can defend and showing how sensitive the answer is to them.',
      },
      { type: 'h2', text: '1. Lay out the sheet' },
      {
        type: 'p',
        text: 'Keep inputs, calculations and outputs clearly separated. Put all assumptions (growth rates, margins, discount rate) in one block and colour-code them so anyone reviewing the model can see what is an input and what is a formula. Use one column per forecast year, typically five to ten years.',
      },
      { type: 'h2', text: '2. Forecast unlevered free cash flow' },
      {
        type: 'p',
        text: 'Start from revenue and work down to operating profit (EBIT). Then convert it to cash available to all capital providers:',
      },
      {
        type: 'list',
        items: [
          'EBIT minus taxes on EBIT gives NOPAT (net operating profit after tax).',
          'Add back depreciation and amortisation, which are non-cash charges.',
          'Subtract capital expenditure.',
          'Subtract the increase in net working capital.',
        ],
      },
      { type: 'h2', text: '3. Choose a discount rate' },
      {
        type: 'p',
        text: 'Unlevered free cash flow is discounted at the weighted average cost of capital (WACC), which blends the cost of equity and the after-tax cost of debt according to the target capital structure. The cost of equity is commonly estimated with the capital asset pricing model.',
      },
      { type: 'h2', text: '4. Estimate terminal value' },
      {
        type: 'p',
        text: 'Most of a DCF value often sits beyond the explicit forecast. Two common approaches are the perpetuity growth method, where terminal value equals next year’s free cash flow divided by (WACC minus long-term growth), and the exit multiple method, which applies a valuation multiple to a final-year metric such as EBITDA. Using both is a useful cross-check.',
      },
      { type: 'h2', text: '5. Discount and sum' },
      {
        type: 'p',
        text: 'Discount each year’s cash flow and the terminal value back to today using 1 / (1 + WACC) ^ t. Be careful with Excel’s NPV function: it assumes the first cash flow arrives one full period from now. If your cash flows have specific dates, XNPV is more precise.',
      },
      { type: 'h2', text: '6. From enterprise value to equity value' },
      {
        type: 'p',
        text: 'The sum of the discounted cash flows is the enterprise value. Subtract net debt (and other claims such as minority interests) to reach equity value, then divide by diluted shares outstanding for a value per share.',
      },
      { type: 'h2', text: '7. Test the assumptions' },
      {
        type: 'p',
        text: 'Build a sensitivity table with WACC on one axis and terminal growth on the other using Excel’s Data Table feature (What-If Analysis). A range of values is far more honest than a single number, and it shows reviewers which assumptions drive the result.',
      },
    ],
  },
  {
    title: 'Common IFRS vs US GAAP Differences',
    slug: 'common-ifrs-vs-us-gaap-differences',
    date: '2026-10-15',
    draft: true,
    excerpt:
      'An overview of the differences between IFRS and US GAAP that most often affect financial statement analysis, from inventory to leases and impairment.',
    body: [
      {
        type: 'p',
        text: 'IFRS is used in many countries around the world, including across the European Union, while US GAAP applies to US companies. The two frameworks have converged in several areas, but differences remain that can change reported numbers. Knowing them helps when comparing companies across frameworks.',
      },
      { type: 'h2', text: 'Principles versus rules' },
      {
        type: 'p',
        text: 'IFRS is generally described as more principles-based, leaving more room for judgement. US GAAP is more rules-based, with detailed industry-specific guidance. In practice this means two companies with similar economics can present results differently.',
      },
      { type: 'h2', text: 'Inventory' },
      {
        type: 'list',
        items: [
          'LIFO (last in, first out) is prohibited under IFRS but permitted under US GAAP.',
          'IFRS allows inventory write-downs to be reversed if conditions improve. US GAAP does not permit reversals.',
        ],
      },
      { type: 'h2', text: 'Property, plant and equipment' },
      {
        type: 'p',
        text: 'IFRS allows companies to carry PP&E at a revalued amount (fair value) instead of historical cost. US GAAP requires the cost model. Revaluation can make balance sheets under IFRS look stronger without any change in the underlying business.',
      },
      { type: 'h2', text: 'Impairment' },
      {
        type: 'p',
        text: 'Under IFRS, impairment losses on assets other than goodwill can be reversed if the recoverable amount recovers. US GAAP prohibits reversals for assets held and used. The tests themselves also differ: IFRS compares carrying amount with recoverable amount in one step, while US GAAP first checks recoverability using undiscounted cash flows.',
      },
      { type: 'h2', text: 'Development costs' },
      {
        type: 'p',
        text: 'IFRS requires development costs to be capitalised once specific criteria are met, such as technical feasibility and intent to complete. US GAAP generally expenses research and development as incurred, with exceptions such as certain software costs.',
      },
      { type: 'h2', text: 'Leases' },
      {
        type: 'p',
        text: 'Both frameworks bring most leases onto the balance sheet. IFRS 16 uses a single model for lessees, so lease costs appear as depreciation and interest. US GAAP (ASC 842) keeps a distinction between finance and operating leases, and operating lease cost is usually shown as a single expense. This affects metrics such as EBITDA.',
      },
      { type: 'h2', text: 'Cash flow classification' },
      {
        type: 'p',
        text: 'IFRS gives a choice in where to classify interest and dividends paid and received in the cash flow statement. US GAAP is more prescriptive, for example classifying interest paid as an operating cash flow. When comparing operating cash flow across companies, check these policy choices first.',
      },
      { type: 'h2', text: 'Why it matters for analysis' },
      {
        type: 'p',
        text: 'Before comparing ratios across companies, confirm which framework each one uses and read the accounting policy notes. Adjusting for a handful of these differences often makes the comparison far more meaningful.',
      },
    ],
  },
]

export function getSortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

export function readingTime(post) {
  const words = post.body
    .map((block) => (block.items ? block.items.join(' ') : block.text))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
