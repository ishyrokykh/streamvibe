import './Table.scss';
import classNames from 'classnames';
import {ReactNode} from "react";

type TTableProps = {
    className?: string;
    headCells: { children?: ReactNode, width: string }[];
    rows: {cells: string[]}[];
}

const Table = ({className, headCells = [], rows = []}: TTableProps) => {
    return (
        <table className={className}>
            {headCells.length > 0 && (
                <thead>
                    <tr>
                        {headCells.map((headCell, index) => (
                            // @ts-ignore
                            <th key={index} width={headCell.width}>{headCell.children}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table