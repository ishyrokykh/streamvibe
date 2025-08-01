import './Tabs.scss';
import classNames from 'classnames';
import {ReactNode} from "react";
import getTabsElementsIdsFromTitle from "./utils/getTabsElementsIdsFromTitle";
import TabsNavigation from "./components/TabsNavigation";

type TTabItem = {title: string, children: ReactNode , isActive?: boolean};

type TTabsProps = {
    className?: string;
    title?: string;
    items: TTabItem[];
    navigationTargetElementId?: null | string;
    isEnabledOnlyOnMobile?: boolean;
}

const Tabs = ({isEnabledOnlyOnMobile = false,navigationTargetElementId, className, title, items}: TTabsProps) => {
    return (
        <div className={classNames(className, 'tabs', {
            'tabs--enable-only-on-mobile': isEnabledOnlyOnMobile,
        })} data-js-tabs={JSON.stringify({
            navigationTargetElementId
        })}>
            {!navigationTargetElementId && (
                <TabsNavigation title={title} items={items} />
            )}
            <div className="tabs__body">
                {items.map((item, index) => {
                    const {title, children, isActive} = item;

                    const {buttonId, contentId} = getTabsElementsIdsFromTitle(title);

                    return <div
                        key={index}
                        className={classNames('tabs__content', {
                            'is-active': isActive
                        })}
                        id={contentId}
                        aria-labelledby={buttonId}
                        tabIndex={0}
                        data-js-tabs-content=""
                    >
                        {children}
                    </div>;
                })}
            </div>
        </div>
    );
}

export default Tabs