/**
 * @type {Invoice[]}
 */
let invoices = [];

export async function fetchData () {
  try {
	invoices = await (await fetch('/data.json')).json()
  } catch (err) {
	console.error(err.message)
  }
}


export function getInvoices() {
  return invoices;
}

/**
 * @param {number} number
 * @returns {Invoice}
 */
export function getInvoice(number) {
  return invoices.find(invoice => invoice.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteInvoice(number) {
  invoices = invoices.filter(invoice => invoice.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */
