<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/api/user' => [[['_route' => 'app_api_get_user', '_controller' => 'App\\Controller\\APIController::get_user'], null, ['POST' => 0], null, false, false, null]],
        '/api/upload' => [[['_route' => 'app_api_test_upload', '_controller' => 'App\\Controller\\APIController::test_upload'], null, ['POST' => 0], null, false, false, null]],
        '/api/test' => [[['_route' => 'app_api_test_route', '_controller' => 'App\\Controller\\APIController::test_route'], null, ['GET' => 0], null, false, false, null]],
        '/home' => [[['_route' => 'home', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
        '/api/departments' => [
            [['_route' => 'app_models_departments_departments_all', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::all'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'app_models_departments_departments_create', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::create'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/subtags' => [[['_route' => 'app_models_tags_subtags_all', '_controller' => 'App\\Controller\\Models\\Tags\\Subtags::all'], null, ['GET' => 0], null, false, false, null]],
        '/api/tags' => [[['_route' => 'app_models_tags_tags_all', '_controller' => 'App\\Controller\\Models\\Tags\\Tags::all'], null, ['GET' => 0], null, false, false, null]],
        '/api/teams' => [[['_route' => 'app_models_teams_teams_all', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::all'], null, ['GET' => 0], null, false, false, null]],
        '/api/auth/login' => [[['_route' => 'app_models_users_auth_login', '_controller' => 'App\\Controller\\Models\\Users\\Auth::login'], null, ['POST' => 0], null, false, false, null]],
        '/api/auth/change_password' => [[['_route' => 'app_models_users_auth_change_password', '_controller' => 'App\\Controller\\Models\\Users\\Auth::change_password'], null, ['POST' => 0], null, false, false, null]],
        '/api/auth/remember_password' => [[['_route' => 'app_models_users_auth_remember_password', '_controller' => 'App\\Controller\\Models\\Users\\Auth::remember_password'], null, ['POST' => 0], null, false, false, null]],
        '/api/users' => [
            [['_route' => 'app_models_users_users_all', '_controller' => 'App\\Controller\\Models\\Users\\Users::all'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'app_models_users_users_create', '_controller' => 'App\\Controller\\Models\\Users\\Users::create'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/users/user' => [[['_route' => 'app_models_users_users_user', '_controller' => 'App\\Controller\\Models\\Users\\Users::user'], null, ['GET' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/a(?'
                    .'|ssets/(?'
                        .'|images/([^/]++)/([^/]++)(*:207)'
                        .'|files/([^/]++)(*:229)'
                    .')'
                    .'|pi/(?'
                        .'|rol/([^/]++)(*:256)'
                        .'|t(?'
                            .'|a(?'
                                .'|ble/([^/]++)(*:284)'
                                .'|sks/(?'
                                    .'|([^/]++)(?'
                                        .'|(*:310)'
                                        .'|/(?'
                                            .'|name(*:326)'
                                            .'|t(?'
                                                .'|ags(*:341)'
                                                .'|ime_limit(*:358)'
                                            .')'
                                            .'|s(?'
                                                .'|tatus(*:376)'
                                                .'|ubtask(*:390)'
                                            .')'
                                            .'|file(*:403)'
                                        .')'
                                    .')'
                                    .'|files/([^/]++)(*:427)'
                                    .'|([^/]++)/message(?'
                                        .'|(*:454)'
                                        .'|s(*:463)'
                                    .')'
                                    .'|messages/([^/]++)(*:489)'
                                    .'|([^/]++)/(?'
                                        .'|time_working(?'
                                            .'|/add(*:528)'
                                            .'|(*:536)'
                                        .')'
                                        .'|user(?'
                                            .'|(*:552)'
                                        .')'
                                        .'|store(*:566)'
                                    .')'
                                .')'
                            .')'
                            .'|eams/team/([^/]++)/(?'
                                .'|users(?'
                                    .'|(*:607)'
                                .')'
                                .'|tasks(?'
                                    .'|(*:624)'
                                    .'|/stored(*:639)'
                                    .'|(*:647)'
                                .')'
                                .'|org_chart(*:665)'
                            .')'
                        .')'
                        .'|departments/([^/]++)(?'
                            .'|(*:698)'
                            .'|/(?'
                                .'|users(?'
                                    .'|(*:718)'
                                .')'
                                .'|teams(?'
                                    .'|(*:735)'
                                .')'
                            .')'
                        .')'
                        .'|subtasks/([^/]++)(?'
                            .'|(*:766)'
                            .'|/(?'
                                .'|subtag(*:784)'
                                .'|time_(?'
                                    .'|limit(*:805)'
                                    .'|working(*:820)'
                                .')'
                                .'|message(?'
                                    .'|(*:839)'
                                    .'|s(*:848)'
                                .')'
                                .'|user(?'
                                    .'|(*:864)'
                                .')'
                            .')'
                        .')'
                        .'|users/user/([^/]++)(?'
                            .'|(*:897)'
                            .'|/(?'
                                .'|departments(*:920)'
                                .'|teams(*:933)'
                            .')'
                        .')'
                    .')'
                .')'
                .'|/(.*)(*:950)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        207 => [[['_route' => 'app_api_getimg', '_controller' => 'App\\Controller\\APIController::getImg'], ['type', 'name'], ['GET' => 0], null, false, true, null]],
        229 => [[['_route' => 'app_api_getfile', '_controller' => 'App\\Controller\\APIController::getFile'], ['name'], ['GET' => 0], null, false, true, null]],
        256 => [[['_route' => 'app_api_get_rol', '_controller' => 'App\\Controller\\APIController::get_rol'], ['rol_id'], ['GET' => 0], null, false, true, null]],
        284 => [[['_route' => 'app_api_show_table', '_controller' => 'App\\Controller\\APIController::show_table'], ['table'], ['GET' => 0], null, false, true, null]],
        310 => [[['_route' => 'app_models_tasks_tasks_delete_task', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::delete_task'], ['id_task'], ['DELETE' => 0], null, false, true, null]],
        326 => [[['_route' => 'app_models_tasks_tasks_update_task_name', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::update_task_name'], ['id_task'], ['POST' => 0], null, false, false, null]],
        341 => [[['_route' => 'app_models_tasks_tasks_update_task_tag', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::update_task_tag'], ['id_task'], ['POST' => 0], null, false, false, null]],
        358 => [[['_route' => 'app_models_tasks_tasks_update_task_time_limit', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::update_task_time_limit'], ['id_task'], ['POST' => 0], null, false, false, null]],
        376 => [[['_route' => 'app_models_tasks_tasks_update_task_status', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::update_task_status'], ['id_task'], ['PUT' => 0], null, false, false, null]],
        390 => [[['_route' => 'app_models_tasks_tasks_add_subtask', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::add_subtask'], ['id_task'], ['POST' => 0], null, false, false, null]],
        403 => [[['_route' => 'app_models_tasks_tasks_add_file', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::add_file'], ['id_task'], ['POST' => 0], null, false, false, null]],
        427 => [[['_route' => 'app_models_tasks_tasks_delete_task_file', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::delete_task_file'], ['file_name'], ['DELETE' => 0], null, false, true, null]],
        454 => [[['_route' => 'app_models_tasks_tasks_add_message', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::add_message'], ['id_task'], ['POST' => 0], null, false, false, null]],
        463 => [[['_route' => 'app_models_tasks_tasks_read_messages', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::read_messages'], ['id_task'], ['GET' => 0], null, false, false, null]],
        489 => [[['_route' => 'app_models_tasks_tasks_delete_message', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::delete_message'], ['id_message'], ['DELETE' => 0], null, false, true, null]],
        528 => [[['_route' => 'app_models_tasks_tasks_update_time_working_manual', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::update_time_working_manual'], ['id_task'], ['POST' => 0], null, false, false, null]],
        536 => [[['_route' => 'app_models_tasks_tasks_update_time_working', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::update_time_working'], ['id_task'], ['POST' => 0], null, false, false, null]],
        552 => [
            [['_route' => 'app_models_tasks_tasks_add_user', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::add_user'], ['id_task'], ['POST' => 0], null, false, false, null],
            [['_route' => 'app_models_tasks_tasks_delete_task_user', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::delete_task_user'], ['id_task'], ['DELETE' => 0], null, false, false, null],
        ],
        566 => [[['_route' => 'app_models_tasks_tasks_task_store', '_controller' => 'App\\Controller\\Models\\Tasks\\Tasks::task_store'], ['id_task'], ['POST' => 0], null, false, false, null]],
        607 => [
            [['_route' => 'app_models_teams_teams_team_users', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::team_users'], ['id_team'], ['GET' => 0], null, false, false, null],
            [['_route' => 'app_models_teams_teams_add_team_user', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::add_team_user'], ['id_team'], ['POST' => 0], null, false, false, null],
        ],
        624 => [[['_route' => 'app_models_teams_teams_show_team_tasks', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::show_team_tasks'], ['id_team'], ['GET' => 0], null, false, false, null]],
        639 => [[['_route' => 'app_models_teams_teams_show_team_tasks_stored', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::show_team_tasks_stored'], ['id_team'], ['GET' => 0], null, false, false, null]],
        647 => [[['_route' => 'app_models_teams_teams_add_team_tasks', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::add_team_tasks'], ['id_team'], ['POST' => 0], null, false, false, null]],
        665 => [[['_route' => 'app_models_teams_teams_show_org_chart', '_controller' => 'App\\Controller\\Models\\Teams\\Teams::show_org_chart'], ['id_team'], ['GET' => 0], null, false, false, null]],
        698 => [
            [['_route' => 'app_models_departments_departments_show', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::show'], ['id_department'], ['GET' => 0], null, false, true, null],
            [['_route' => 'app_models_departments_departments_update', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::update'], ['id_department'], ['POST' => 0], null, false, true, null],
        ],
        718 => [
            [['_route' => 'app_models_departments_departments_users_departments', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::users_departments'], ['id_department'], ['GET' => 0], null, false, false, null],
            [['_route' => 'app_models_departments_departments_add_user_department', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::add_user_department'], ['id_department'], ['POST' => 0], null, false, false, null],
        ],
        735 => [
            [['_route' => 'app_models_departments_departments_teams_departments', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::teams_departments'], ['id_department'], ['GET' => 0], null, false, false, null],
            [['_route' => 'app_models_departments_departments_teams_departments_add', '_controller' => 'App\\Controller\\Models\\Departments\\Departments::teams_departments_add'], ['id_department'], ['POST' => 0], null, false, false, null],
        ],
        766 => [[['_route' => 'app_models_tasks_subtasks_delete_task', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::delete_task'], ['id_subtask'], ['DELETE' => 0], null, false, true, null]],
        784 => [[['_route' => 'app_models_tasks_subtasks_update_subtask_tag', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::update_subtask_tag'], ['id_subtask'], ['POST' => 0], null, false, false, null]],
        805 => [[['_route' => 'app_models_tasks_subtasks_update_task_time_limit', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::update_task_time_limit'], ['id_subtask'], ['POST' => 0], null, false, false, null]],
        820 => [[['_route' => 'app_models_tasks_subtasks_update_time_working', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::update_time_working'], ['id_subtask'], ['POST' => 0], null, false, false, null]],
        839 => [[['_route' => 'app_models_tasks_subtasks_add_message', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::add_message'], ['id_subtask'], ['POST' => 0], null, false, false, null]],
        848 => [[['_route' => 'app_models_tasks_subtasks_read_messages', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::read_messages'], ['id_subtask'], ['GET' => 0], null, false, false, null]],
        864 => [
            [['_route' => 'app_models_tasks_subtasks_add_user', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::add_user'], ['id_subtask'], ['POST' => 0], null, false, false, null],
            [['_route' => 'app_models_tasks_subtasks_delete_subtask_user', '_controller' => 'App\\Controller\\Models\\Tasks\\SubTasks::delete_subtask_user'], ['id_subtask'], ['DELETE' => 0], null, false, false, null],
        ],
        897 => [
            [['_route' => 'app_models_users_users_show', '_controller' => 'App\\Controller\\Models\\Users\\Users::show'], ['id_user'], ['GET' => 0], null, false, true, null],
            [['_route' => 'app_models_users_users_update', '_controller' => 'App\\Controller\\Models\\Users\\Users::update'], ['id_user'], ['POST' => 0], null, false, true, null],
        ],
        920 => [[['_route' => 'app_models_users_users_show_departments', '_controller' => 'App\\Controller\\Models\\Users\\Users::show_departments'], ['id_user'], ['GET' => 0], null, false, false, null]],
        933 => [[['_route' => 'app_models_users_users_show_teams', '_controller' => 'App\\Controller\\Models\\Users\\Users::show_teams'], ['id_user'], ['GET' => 0], null, false, false, null]],
        950 => [
            [['_route' => 'index', '_controller' => 'App\\Controller\\BaseController::index'], ['wildcard'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
