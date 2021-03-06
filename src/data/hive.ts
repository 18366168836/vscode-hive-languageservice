import { builtInFunctions, keywords } from '@mammut-fe/hive-data';
import { CompletionItemKind } from 'vscode-languageserver-types';

export const data: any = {
    use: [
        {
            name: 'use',
            desc: 'USE sets the current database for all subsequent HiveQL statements.',
            restriction: 'string',
            values: [
                {
                    name: 'default',
                    desc: 'HiveQL default database.',
                    kind: CompletionItemKind.Keyword,
                    detail: 'keyword'
                }
            ]
        }
    ],
    select: [
        {
            name: 'select',
            decs: '',
            restriction: 'function',
            values: [
                {
                    name: 'current_database()',
                    desc: 'HiveQL default database.',
                    kind: CompletionItemKind.Keyword,
                    detail: 'function'
                },
                {
                    name: '*',
                    kind: CompletionItemKind.Value,
                    detail: 'keyword'
                }
            ]
        }
    ],
    builtInFunctions,
    keywords
};

export const descriptions: any = {};
