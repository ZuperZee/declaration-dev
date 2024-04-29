# Declaration dev

Just a development repo for checking the sizes of declaration (mainly for [Grafana HTMLGraphics panel](https://github.com/gapitio/gapit-htmlgraphics-panel)).

More info on the issue: <https://github.com/gapitio/gapit-htmlgraphics-panel/issues/184>.

## Usage

Install dependencies

```sh
pnpm i
```

Run the code

```sh
node main.js
```

Check the sizes

```sh
node index.js | xargs wc
```

## Results

All declarations (max_depth = 999)

Size: 2.6 MB

```sh
   7010   25594  232018 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+data@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/data/dist/index.d.ts
   1087    3095   24988 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+schema@9.3.6/node_modules/@grafana/schema/dist/index.d.ts
   4524   19010  192738 /home/zee/dev/declaration-dev/node_modules/.pnpm/@types+react@18.3.1/node_modules/@types/react/ts5.0/index.d.ts
  21297  126296  903116 /home/zee/dev/declaration-dev/node_modules/.pnpm/csstype@3.1.3/node_modules/csstype/index.d.ts
    109     476    3851 /home/zee/dev/declaration-dev/node_modules/.pnpm/@types+prop-types@15.7.12/node_modules/@types/prop-types/index.d.ts
    785    2400   23327 /home/zee/dev/declaration-dev/node_modules/.pnpm/moment@2.29.4/node_modules/moment/ts3.1-typings/moment.d.ts
    171    1038   10410 /home/zee/dev/declaration-dev/node_modules/.pnpm/rxjs@7.5.7/node_modules/rxjs/dist/types/index.d.ts
     26     209    1479 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/index.d.ts
    311    1418   11607 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/layer/Base.d.ts
    177     796    6549 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/Object.d.ts
     59     181    1522 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/events/Event.d.ts
     95     422    4062 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/Observable.d.ts
     82     355    3003 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/events/Target.d.ts
     25      65     511 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/Disposable.d.ts
  23802   66411  603191 /home/zee/dev/declaration-dev/node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/typings.d.ts
   1425    5578   45554 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+runtime@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/runtime/dist/index.d.ts
   4379   24301  221317 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+ui@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/ui/dist/index.d.ts
      2      10      94 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-select@5.6.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-select/dist/react-select.cjs.d.ts
      1       4      23 /home/zee/dev/declaration-dev/node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/index.d.ts
     10      40     302 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-hook-form@7.5.3_react@17.0.2/node_modules/react-hook-form/dist/index.d.ts
      7      56     512 /home/zee/dev/declaration-dev/node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.d.ts
     26      70     741 /home/zee/dev/declaration-dev/node_modules/.pnpm/@emotion+css@11.10.5/node_modules/@emotion/css/types/index.d.ts
     55     145    1513 /home/zee/dev/declaration-dev/node_modules/.pnpm/@emotion+css@11.10.5/node_modules/@emotion/css/types/create-instance.d.ts
     44     121    1063 /home/zee/dev/declaration-dev/node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/types/index.d.ts
     59     125    1163 /home/zee/dev/declaration-dev/node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/types/index.d.ts
     70     174    1696 /home/zee/dev/declaration-dev/node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/types/index.d.ts
     26      65     590 /home/zee/dev/declaration-dev/node_modules/.pnpm/@emotion+sheet@1.2.2/node_modules/@emotion/sheet/types/index.d.ts
     85     278    2708 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-popper/typings/react-popper.d.ts
     71     160    2067 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-custom-scrollbars-2@4.5.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-custom-scrollbars-2/index.d.ts
    317     980    7216 /home/zee/dev/declaration-dev/node_modules/.pnpm/@monaco-editor+react@4.4.6_monaco-editor@0.34.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@monaco-editor/react/lib/types.d.ts
   8263   32314  294099 /home/zee/dev/declaration-dev/node_modules/.pnpm/monaco-editor@0.34.0/node_modules/monaco-editor/esm/vs/editor/editor.api.d.ts
   1123    4982   35196 /home/zee/dev/declaration-dev/node_modules/.pnpm/uplot@1.6.23/node_modules/uplot/dist/uPlot.d.ts
      4      29     341 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-use@17.4.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-use/lib/useAsync.d.ts
      2      24     179 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-use@17.4.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-use/lib/misc/types.d.ts
     97     269    2610 /home/zee/dev/declaration-dev/node_modules/.pnpm/react-dropzone@14.2.3_react@17.0.2/node_modules/react-dropzone/typings/react-dropzone.d.ts
     61     172    1913 /home/zee/dev/declaration-dev/types/index.d.ts
  75687  317663 2643269 total
```

Top declarations (max_depth = 2)

Size: 1.3 MB

```sh
   7010   25594  232018 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+data@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/data/dist/index.d.ts
   1087    3095   24988 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+schema@9.3.6/node_modules/@grafana/schema/dist/index.d.ts
   4524   19010  192738 /home/zee/dev/declaration-dev/node_modules/.pnpm/@types+react@18.3.1/node_modules/@types/react/ts5.0/index.d.ts
    785    2400   23327 /home/zee/dev/declaration-dev/node_modules/.pnpm/moment@2.29.4/node_modules/moment/ts3.1-typings/moment.d.ts
    171    1038   10410 /home/zee/dev/declaration-dev/node_modules/.pnpm/rxjs@7.5.7/node_modules/rxjs/dist/types/index.d.ts
     26     209    1479 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/index.d.ts
    311    1418   11607 /home/zee/dev/declaration-dev/node_modules/.pnpm/ol@7.1.0/node_modules/ol/layer/Base.d.ts
  23802   66411  603191 /home/zee/dev/declaration-dev/node_modules/.pnpm/date-fns@2.29.3/node_modules/date-fns/typings.d.ts
   1425    5578   45554 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+runtime@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/runtime/dist/index.d.ts
   4379   24301  221317 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+ui@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/ui/dist/index.d.ts
     61     172    1913 /home/zee/dev/declaration-dev/types/index.d.ts
  43581  149226 1368542 total
```

Top declarations (max_depth = 1)

Size: 280 kB

```sh
  7010  25594 232018 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+data@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/data/dist/index.d.ts
  1425   5578  45554 /home/zee/dev/declaration-dev/node_modules/.pnpm/@grafana+runtime@9.3.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@grafana/runtime/dist/index.d.ts
    61    172   1913 /home/zee/dev/declaration-dev/types/index.d.ts
  8496  31344 279485 total
```
