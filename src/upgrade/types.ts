export type Upgrade = {
  cost: number;
  name: string;
  description?: string;
  prerequisite?: Upgrade;
  isPurchased: boolean;
  apply: UpgradeFunction;
}

// TODO: Figure this out as we go
export type UpgradeFunction = (state: any) => any;

/**
 * auto clicker (auto complete packet) - increase score at some interval
 * makes auto clicker faster
 * envelope opener
 * Sort opened envelopes
 *  * reg packets
 *  * trades
 *  * fin ops (checks)
 *  * blue folders
 * OCR for each step
 * Hiring an employee
 */
