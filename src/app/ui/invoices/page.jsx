import { fetchInvoices } from '@/app/lib/data';


export default async function Page() {
    const invoices  = await fetchInvoices();
    console.log("invoices: ", invoices);


    return <p>Invoices Page</p>;
}