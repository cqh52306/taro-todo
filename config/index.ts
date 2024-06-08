const config = {
  projectName: "taro-todo",
  date: "2024-6-4",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: {
    prebundle: {
      enable: false,
    },
    type: "webpack5",
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  rn: {
    output: {
      iosSourceMapUrl: "", // sourcemap 文件url
      iosSourcemapOutput: "../taro-native-shell/ios/main.map", // sourcemap 文件输出路径
      iosSourcemapSourcesRoot: "", // 将 sourcemap 资源路径转为相对路径时的根目录
      androidSourceMapUrl: "",
      androidSourcemapOutput:
        "../taro-native-shell/android/app/src/main/assets/index.android.map",
      androidSourcemapSourcesRoot: "",
      ios: "../taro-native-shell/ios/main.jsbundle",
      iosAssetsDest: "../taro-native-shell/ios",
      android:
        "../taro-native-shell/android/app/src/main/assets/index.android.bundle",
      androidAssetsDest: "../taro-native-shell/android/app/src/main/res",
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
