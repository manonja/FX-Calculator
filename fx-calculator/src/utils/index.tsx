export function ccySymbol(ccy: string): string {
    switch (ccy) {
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'GBP':
            return '£';
        default:
            return ccy;
    }
}
