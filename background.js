!(function ($) {

    'use strict';

    var OPTIONS_CONTEXT_MENU_ID = '21cfae7e-85a4-4c7f-8f67-df602cffa748';

    var MOCK_CONTEXT_MENU_ID = '5fb57837-7976-4c86-a5da-e0276d907bf9';

    var CONVERTER_CONTEXT_MENU_ID = '7a96f32a-dc35-4522-a63f-d51e1c2b8a55';

    // listener para o evento de instalação da extensão.

    chrome.runtime.onInstalled.addListener(function () {

        // carrega toda a fonte de dados da extensão:

        extension.loadDataSet('1.0', 'pt-br', function (data) {

            // remove todos os menus de contexto e no callback desta ação
            // recria os mesmos:

            // contexts: [all, page, frame, selection, link, editable, image, video, audio, launcher, browser_action, page_action]

            // reset options.

            chrome.contextMenus.removeAll(function () {

                // MENUS:

                // ============================================================
                // Principais
                // ============================================================

                // Menu de contexto para configuração da extensão:

                chrome.contextMenus.create({
                    'id': OPTIONS_CONTEXT_MENU_ID,
                    'title': 'Configuração',
                    'contexts': ['page_action']
                });

                // Menu de contexto para criação randomica de usuários e dados 
                // de usuários:

                chrome.contextMenus.create({
                    'id': MOCK_CONTEXT_MENU_ID,
                    'title': 'Mock',
                    'contexts': ['editable']
                });

                // Menu de contexto para conversão de formatos:

                chrome.contextMenus.create({
                    'id': CONVERTER_CONTEXT_MENU_ID,
                    'title': 'Conversor',
                    'contexts': ['selection']
                });

                // ============================================================

                // SUBMENUS:

                // ============================================================
                // Configuração
                // ============================================================

                // submenus do menu de contexto massa de dados

                localStorage.setItem('options-uppercase', false);

                chrome.contextMenus.create({
                    'id': 'options-uppercase',
                    'parentId': OPTIONS_CONTEXT_MENU_ID,
                    'title': 'Texto em caixa alta',
                    'type': 'checkbox',
                    'checked': (localStorage.getItem('options-uppercase') == 'true'),
                    'contexts': ['page_action']
                });                

                localStorage.setItem('options-use-mask', false);

                chrome.contextMenus.create({
                    'id': 'options-use-mask',
                    'parentId': OPTIONS_CONTEXT_MENU_ID,
                    'title': 'Usar máscara',
                    'type': 'checkbox',
                    'checked': (localStorage.getItem('options-use-mask') == 'true'),
                    'contexts': ['page_action']
                });                

                // ============================================================

                // ============================================================
                // Mock > Nomes
                // ============================================================

                chrome.contextMenus.create({
                    'id': 'mock-names',
                    'parentId': MOCK_CONTEXT_MENU_ID,
                    'title': 'Nomes',
                    'contexts': ['editable']
                });

                // submenus do menu de contexto massa de dados

                chrome.contextMenus.create({
                    'id': 'mock-names-female-full-name',
                    'parentId': 'mock-names',
                    'title': 'Nome feminino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'mock-names-female-first-name',
                    'parentId': 'mock-names',
                    'title': 'Primeiro nome feminino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'mock-names-male-full-name',
                    'parentId': 'mock-names',
                    'title': 'Nome masculino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'mock-names-male-first-name',
                    'parentId': 'mock-names',
                    'title': 'Primeiro nome masculino',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'mock-names-last-name',
                    'parentId': 'mock-names',
                    'title': 'Sobrenome',
                    'contexts': ['editable']
                });

                // ============================================================

                // ============================================================
                // Mock > Documentação
                // ============================================================

                chrome.contextMenus.create({
                    'id': 'mock-docs',
                    'parentId': MOCK_CONTEXT_MENU_ID,
                    'title': 'Documentação',
                    'contexts': ['editable']
                });

                // submenus do menu de contexto massa de dados

                chrome.contextMenus.create({
                    'id': 'mock-docs-cpf',
                    'parentId': 'mock-docs',
                    'title': 'Cpf',
                    'contexts': ['editable']
                });

                chrome.contextMenus.create({
                    'id': 'mock-docs-cnpj',
                    'parentId': 'mock-docs',
                    'title': 'Cnpj',
                    'contexts': ['editable']
                });

                // ============================================================ 

                // ============================================================
                // Mock > Identificadores
                // ============================================================

                chrome.contextMenus.create({
                    'id': 'mock-ids',
                    'parentId': MOCK_CONTEXT_MENU_ID,
                    'title': 'Identificadores',
                    'contexts': ['editable']
                });

                // submenus do menu de contexto massa de dados

                chrome.contextMenus.create({
                    'id': 'mock-ids-guid',
                    'parentId': 'mock-ids',
                    'title': 'Guid',
                    'contexts': ['editable']
                });

                // ============================================================

            });

        });

    });

    // listener para o evento de clique no menu de contexto.

    chrome.contextMenus.onClicked.addListener(function (item) {

        switch (item.menuItemId) {

            case 'options-uppercase':

                localStorage.setItem('options-uppercase', item.checked);

                break;

            case 'options-use-mask':

                localStorage.setItem('options-use-mask', item.checked);

                break;

            case 'mock-names-female-full-name':

                extension.chrome.setValue(extension.generators.femaleFullName());

                break;

            case 'mock-names-female-first-name':

                extension.chrome.setValue(extension.generators.femaleFirstName());

                break;

            case 'mock-names-male-full-name':

                extension.chrome.setValue(extension.generators.maleFullName());

                break;

            case 'mock-names-male-first-name':

                extension.chrome.setValue(extension.generators.maleFirstName());

                break;

            case 'mock-names-last-name':

                extension.chrome.setValue(extension.generators.lastName());

                break;

            case 'mock-docs-cpf':

                extension.chrome.setValue(extension.generators.cpf(localStorage.getItem('options-use-mask') == 'true'));

                break;

            case 'mock-docs-cnpj':

                extension.chrome.setValue(extension.generators.cnpj(localStorage.getItem('options-use-mask') == 'true'));

                break;

            case 'mock-ids-guid':

                extension.chrome.setValue(extension.generators.newGuid());

                break;

            default:
                break;
        }

    });

})(window.jQuery);