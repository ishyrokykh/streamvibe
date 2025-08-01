abstract class BaseComponent<TProxyState extends object> {
    abstract updateUI(): void;

    getProxyState = (initialState: TProxyState) => {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop];
            },
            set: (target, prop, newValue): boolean => {
                const oldValue = target[prop];

                target[prop] = newValue;

                if (oldValue !== newValue) {
                    this.updateUI();
                }

                return true;
            }
        })
    }
}

export default BaseComponent;