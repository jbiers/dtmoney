import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    // possible eventually existing route
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
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