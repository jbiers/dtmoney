import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    // possible eventually existing route
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className="deposit">R$12.000</td>
                        <td>Software Dev</td>
                        <td>21/02/2022</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>House</td>
                        <td>25/02/2022</td>
                    </tr>
                    <tr>
                        <td>Website development</td>
                        <td className="deposit">R$12.000</td>
                        <td>Software Dev</td>
                        <td>21/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}