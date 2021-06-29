<style type="text/Css">

.test1 {
    border: solid 1px #FF0000;
    background: #FFFFFF;
    border-collapse: collapse;
}
page{
    text-align:center;
}
table{
    background: #D1EDD4;
    margin: auto;
    width: 100%;
}
td{
    font-size: 17px;
    color: white;
    padding: 10;
}
.listo, .normal {
    background: green;
}
.inminente {
    background: orange;
}
.paso {
    background: grey;
}
.solicitado {
    background: purple;
}
.urgente{
    background: red;
}
.vida_muerte, script {
    background: black;
}
.solicitada {
    background: blue;
}
.estancado{
    background: red;
}
.proceso{
    background: yellow;
}
.info{
    background: blue;
}
</style>


<page>
    <br><br><br><br>
    <h1><?=$subject;?></h1>
    <h3><?=$periodo;?></h3>
</page>

<?php
    use App\Controller\CRUDController;

    
    $CRUD_user_teams = new CRUDController('users_teams','id');
    $users_team = $CRUD_user_teams->plenty( array('id_team' => $id_team));
    $CRUD_users = new CRUDController('users','id');
    $CRUD_tasks = new CRUDController('tasks','id');
    $tasks = $CRUD_tasks->plenty( array('id_team' => $id_team, 'store' => 0, 'id_status' => 4));

    $CRUD_users_tasks = new CRUDController('users_tasks','id');

    $CRUD_tasks_tags = new CRUDController('tasks_tags','id');
    $CRUD_tags = new CRUDController('tags','id');

    foreach ($users_team as $user_team) {
        $id_user = $user_team['id_user'];
        $user = $CRUD_users->one($id_user);
        echo '<page>';
            echo "<h2 style='color:Blue;'>".$user['name']."</h2>";
            echo "<table>";
                //echo "<thead><tr><th>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Prioridad&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Autorización&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Haciéndose&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Entregado&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Plazo&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Tiempo&nbsp;&nbsp;</th><th>&nbsp;&nbsp;ID&nbsp;&nbsp;</th></tr></thead>";
                echo "<thead><tr><th>&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Prioridad&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Autorización&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Haciéndose&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Entregado&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Plazo&nbsp;&nbsp;</th><th>&nbsp;&nbsp;Tiempo&nbsp;&nbsp;</th><th>&nbsp;&nbsp;ID&nbsp;&nbsp;</th></tr></thead>";
                $user_tasks = $CRUD_users_tasks->plenty( array( 'id_user' => $id_user ) );
                foreach ($user_tasks as $u_task) {
                    $id_task = $u_task['id_task'];
                    $index_task = array_search($id_task,array_column($tasks, 'id'));
                    if( $index_task !== false ){
                        echo "<tr>";

                            $t_name = ucfirst(strtolower($tasks[$index_task]['name']));
                            if( strlen($t_name) > 35 ){
                                $words = explode(" ", $t_name);
                                $line = 0;
                                $t_name = "";
                                foreach ($words as $i => $word) {
                                    $len = strlen($word);
                                    if( ($line + $len) > 35 ){
                                        $t_name .=  "<br>";
                                        $line = 0;
                                    }
                                    $t_name .= "$word ";
                                    $line += $len +1;
                                }
                            }
                            //$tname =  strlen($tasks[$index_task]['name']) > 30 ? substr($tasks[$index_task]['name'],0,30) . "<br>" .  substr($tasks[$index_task]['name'],30,30) :  $tasks[$index_task]['name'] ;

                            echo "<td style='text-align:left;color: black;'>". $t_name ."</td>";

                            $tasks_tags = $CRUD_tasks_tags->plenty( array('id_task' => $tasks[$index_task]['id'] ));
                            $tags = [];
                            foreach ($tasks_tags as $tt) {
                                $id_tag =   $tt["id_tag"];
                                $tag = $CRUD_tags->one($id_tag);
                                $tags[ $tag['id_type'] ] = $tag;
                            }
                            foreach ($tags as $tag) {
                                if ( $tag['name'] == "Solicitado por Manuel" ){
                                    echo "<td class='". "solicitado" ."'>" . $tag['name'] . "</td>";
                                }else  if ( $tag['name'] == "Vida o muerte" ){
                                    echo "<td class='". "vida_muerte" ."'>" . $tag['name'] . "</td>";
                                }else  if ( $tag['name'] == "En proceso" ){
                                    echo "<td class='". "proceso" ."'>" . $tag['name'] . "</td>";
                                }else  if ( $tag['name'] == "+info" ){
                                    echo "<td class='". "info" ."'>" . $tag['name'] . "</td>";
                                }else{
                                    echo "<td class='". $tag['name'] ."'>" . $tag['name'] . "</td>";
                                }
                                
                            }

                            $p_start = $tasks[$index_task]['time_limit'];
                            $p_start = substr($p_start,8,2) . '/' . substr($p_start,5,2);
                            $p_end = $tasks[$index_task]['time_limit_end'];
                            $p_end = substr($p_end,8,2) . '/' . substr($p_end,5,2);
                            $plazo = ($p_start != $p_end) ? $p_start . " - " . $p_end :  $p_start;
                            echo "<td style='color: black;'>$plazo</td>";

                            $time_working = $tasks[$index_task]['time_working'];
                            $hours = intdiv($time_working, 3600);
                            $hours = $hours < 10 ? '0'.$hours : $hours;
                            $minutes = ( $time_working /60 ) %60;
                            $minutes = $minutes < 10 ? '0'.$minutes : $minutes;
                            $seconds = $time_working  %60;
                            $seconds = $seconds < 10 ? '0'.$seconds : $seconds;
                            $time_working_print = "$hours:$minutes:$seconds";
                            echo "<td style='color: black;'>$time_working_print</td>";

                            echo "<td style='color: black;'>". $tasks[$index_task]['id'] ."</td>";

                        echo "</tr>";
                    }
                }
            echo "</table>";
        echo '</page>';
    }
?>
