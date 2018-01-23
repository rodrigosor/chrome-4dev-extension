!(function ($) {

    'use strict';

    var RANDOM_USER_CONTEXT_MENU_ID = '5fb57837-7976-4c86-a5da-e0276d907bf9';

    var FORMATTER_CONTEXT_MENU_ID = '7a96f32a-dc35-4522-a63f-d51e1c2b8a55';

    var GENERATOR_CONTEXT_MENU_ID = '21cfae7e-85a4-4c7f-8f67-df602cffa748';

    // disparado ao instalar ou atualizar a extensão:

    chrome.runtime.onInstalled.addListener(function () {

        // carrega toda a fonte de dados da extensão:

        extension.loadDataSet('1.0', 'pt-br', function (data) {

            // remove todos os menus de contexto e no callback desta ação
            // recria os mesmos:

            chrome.contextMenus.removeAll(function () {

                // contexts: [all, page, frame, selection, link, editable, image, video, audio, launcher, browser_action, page_action]

                // Menu de contexto para criação randomica de usuários e dados 
                // de usuários:

                chrome.contextMenus.create({
                    'id': RANDOM_USER_CONTEXT_MENU_ID,
                    'title': 'Massa de dados...',
                    'contexts': ['editable']
                });

                // submenus do menu de contexto massa de dados

                chrome.contextMenus.create({
                    'id': 'generate-female-full-name',
                    'parentId': RANDOM_USER_CONTEXT_MENU_ID,
                    'title': 'Gerar nome feminino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'generate-female-first-name',
                    'parentId': RANDOM_USER_CONTEXT_MENU_ID,
                    'title': 'Gerar primeiro nome feminino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'generate-male-full-name',
                    'parentId': RANDOM_USER_CONTEXT_MENU_ID,
                    'title': 'Gerar nome masculino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'generate-male-first-name',
                    'parentId': RANDOM_USER_CONTEXT_MENU_ID,
                    'title': 'Gerar primeiro nome masculino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'generate-last-name',
                    'parentId': RANDOM_USER_CONTEXT_MENU_ID,
                    'title': 'Gerar sobrenome',
                    'contexts': ['editable']
                });


                // Menu de contexto para conversão de formatos:

                chrome.contextMenus.create({
                    'id': FORMATTER_CONTEXT_MENU_ID,
                    'title': 'Converter...',
                    'contexts': ['selection']
                });


            });

        });

    });


})(window.jQuery);