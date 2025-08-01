import postcssPxToRem from 'postcss-pxtorem';
import postcssPresetEnv from 'postcss-preset-env';

export default ({env}) => {
    const isProduction = env === "production";
    const plugins = [];

    if (isProduction) {
        plugins.push(
            postcssPxToRem({
                propList: ['*'],
                mediaQuery: true
            }),
            postcssPresetEnv()
        );
    }

    return {
        plugins
    }
}