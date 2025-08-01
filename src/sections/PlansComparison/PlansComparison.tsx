import './PlansComparison.scss';
import Section from "@/layouts/Section";
import Badge from "@/components/Badge";
import Table from "@/components/Table";
import Specifications from "@/components/Specifications";
import Tabs from "@/components/Tabs";

const PlansComparison = () => {
    const headCells = [
        {
            children: 'Features',
            width: '25%',
        },
        {
            children: 'Basic',
            width: '25%',
            tabsTitle: 'Basic'
        },
        {
            children: <>
                Standard&nbsp;&nbsp;<Badge mode="accent">Popular</Badge>
            </>,
            width: '25%',
            tabsTitle: 'Standard'
        },
        {
            children: 'Premium',
            width: '25%',
            tabsTitle: 'Premium'
        },
    ];

    const rows = [
        {
            cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month']
        },
        {
            cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month']
        },
        {
            cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month'],
            isWide: true,
        },
        {
            cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month'],
            isWide: true,
        },
        {
            cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month']
        },
        {
            cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month']
        }
    ];

    const tabsItems = headCells
        .filter((headCell) => headCell.tabsTitle)
        .map((headCell, headCellIndex) => ({
            title: headCell.tabsTitle,
            isActive: headCellIndex === 0,
            children: <Specifications items={rows.map(row => ({
                term: row.cells[0],
                value: row.cells[headCellIndex + 1],
                isWide: row.isWide,
            }))} />
        }));

    return (
        <Section
            title="Compare our plans and find the right one for you"
            description="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
            titleId="plans-comparison-title"
        >
            <Table className="hidden-mobile" headCells={headCells} rows={rows} />
            <Tabs className="visible-mobile" title="plans-comparison-tabs-title" items={tabsItems} />
        </Section>
    );
}

export default PlansComparison