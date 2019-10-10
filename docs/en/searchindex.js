Search.setIndex({docnames:["changelog/index","changelog/v0.10.0","changelog/v0.10.1","index","intro","src/asyncworker/asyncworker","src/asyncworker/asyncworker.connections","src/asyncworker/asyncworker.easyqueue","src/asyncworker/asyncworker.exceptions","src/asyncworker/asyncworker.rabbitmq","src/asyncworker/asyncworker.signals","src/asyncworker/asyncworker.signals.handlers","src/asyncworker/asyncworker.sse","src/asyncworker/asyncworker.testing","src/asyncworker/asyncworker.types","src/asyncworker/modules","userguide/backends","userguide/handlers/http","userguide/handlers/index","userguide/index","userguide/quickstart"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog/index.rst","changelog/v0.10.0.rst","changelog/v0.10.1.rst","index.rst","intro.rst","src/asyncworker/asyncworker.rst","src/asyncworker/asyncworker.connections.rst","src/asyncworker/asyncworker.easyqueue.rst","src/asyncworker/asyncworker.exceptions.rst","src/asyncworker/asyncworker.rabbitmq.rst","src/asyncworker/asyncworker.signals.rst","src/asyncworker/asyncworker.signals.handlers.rst","src/asyncworker/asyncworker.sse.rst","src/asyncworker/asyncworker.testing.rst","src/asyncworker/asyncworker.types.rst","src/asyncworker/modules.rst","userguide/backends.rst","userguide/handlers/http.rst","userguide/handlers/index.rst","userguide/index.rst","userguide/quickstart.rst"],objects:{"":{asyncworker:[5,0,0,"-"]},"asyncworker.app":{App:[5,1,1,""]},"asyncworker.app.App":{freeze:[5,2,1,""],get_connection:[5,2,1,""],get_connection_for_route:[5,2,1,""],handlers:[5,3,1,""],route:[5,2,1,""],run:[5,2,1,""],run_every:[5,2,1,""],run_on_shutdown:[5,2,1,""],run_on_startup:[5,2,1,""],shutdown:[5,2,1,""],shutdown_os_signals:[5,3,1,""],startup:[5,2,1,""]},"asyncworker.bucket":{Bucket:[5,1,1,""],BucketFullException:[5,4,1,""]},"asyncworker.bucket.Bucket":{is_empty:[5,2,1,""],is_full:[5,2,1,""],pop_all:[5,2,1,""],put:[5,2,1,""],used:[5,2,1,""]},"asyncworker.conf":{Settings:[5,1,1,""]},"asyncworker.conf.Settings":{Config:[5,1,1,""]},"asyncworker.conf.Settings.Config":{allow_mutation:[5,3,1,""],env_prefix:[5,3,1,""]},"asyncworker.connections":{AMQPConnection:[6,1,1,""],Connection:[6,1,1,""],ConnectionsMapping:[6,1,1,""],SSEConnection:[6,1,1,""]},"asyncworker.connections.AMQPConnection":{Config:[6,1,1,""],items:[6,2,1,""],keys:[6,2,1,""],put:[6,2,1,""],register:[6,2,1,""],set_connections:[6,2,1,""],values:[6,2,1,""]},"asyncworker.connections.AMQPConnection.Config":{arbitrary_types_allowed:[6,3,1,""]},"asyncworker.connections.ConnectionsMapping":{add:[6,2,1,""],with_type:[6,2,1,""]},"asyncworker.consumer":{Consumer:[5,1,1,""]},"asyncworker.consumer.Consumer":{consume_all_queues:[5,2,1,""],keep_runnig:[5,2,1,""],on_before_start_consumption:[5,2,1,""],on_connection_error:[5,2,1,""],on_consumption_start:[5,2,1,""],on_message_handle_error:[5,2,1,""],on_queue_error:[5,2,1,""],on_queue_message:[5,2,1,""],queue_name:[5,2,1,""],start:[5,2,1,""]},"asyncworker.easyqueue":{connection:[7,0,0,"-"],exceptions:[7,0,0,"-"],message:[7,0,0,"-"],queue:[7,0,0,"-"]},"asyncworker.easyqueue.connection":{AMQPConnection:[7,1,1,""]},"asyncworker.easyqueue.connection.AMQPConnection":{close:[7,2,1,""],connection_parameters:[7,2,1,""],is_connected:[7,2,1,""]},"asyncworker.easyqueue.exceptions":{EmptyQueueException:[7,4,1,""],InvalidMessageSizeException:[7,4,1,""],MessageError:[7,4,1,""],UndecodableMessageException:[7,4,1,""]},"asyncworker.easyqueue.message":{AMQPMessage:[7,1,1,""]},"asyncworker.easyqueue.message.AMQPMessage":{ack:[7,2,1,""],channel:[7,3,1,""],connection:[7,3,1,""],delivery_tag:[7,3,1,""],deserialized_data:[7,2,1,""],queue_name:[7,3,1,""],reject:[7,2,1,""],serialized_data:[7,3,1,""]},"asyncworker.easyqueue.queue":{BaseJsonQueue:[7,1,1,""],BaseQueue:[7,1,1,""],DeliveryModes:[7,1,1,""],JsonQueue:[7,1,1,""],QueueConsumerDelegate:[7,1,1,""]},"asyncworker.easyqueue.queue.BaseJsonQueue":{content_type:[7,3,1,""],deserialize:[7,2,1,""],serialize:[7,2,1,""]},"asyncworker.easyqueue.queue.BaseQueue":{deserialize:[7,2,1,""],serialize:[7,2,1,""]},"asyncworker.easyqueue.queue.DeliveryModes":{NON_PERSISTENT:[7,3,1,""],PERSISTENT:[7,3,1,""]},"asyncworker.easyqueue.queue.JsonQueue":{consume:[7,2,1,""],deserialize:[7,2,1,""],put:[7,2,1,""],serialize:[7,2,1,""],stop_consumer:[7,2,1,""]},"asyncworker.easyqueue.queue.QueueConsumerDelegate":{on_before_start_consumption:[7,2,1,""],on_connection_error:[7,2,1,""],on_consumption_start:[7,2,1,""],on_message_handle_error:[7,2,1,""],on_queue_message:[7,2,1,""]},"asyncworker.exceptions":{InvalidConnection:[8,4,1,""],InvalidRoute:[8,4,1,""]},"asyncworker.options":{Actions:[5,1,1,""],AutoNameEnum:[5,1,1,""],DefaultValues:[5,1,1,""],Events:[5,1,1,""],Options:[5,1,1,""],RouteTypes:[5,1,1,""]},"asyncworker.options.Actions":{ACK:[5,3,1,""],REJECT:[5,3,1,""],REQUEUE:[5,3,1,""]},"asyncworker.options.DefaultValues":{BULK_FLUSH_INTERVAL:[5,3,1,""],BULK_SIZE:[5,3,1,""],ON_EXCEPTION:[5,3,1,""],ON_SUCCESS:[5,3,1,""],RUN_EVERY_MAX_CONCURRENCY:[5,3,1,""]},"asyncworker.options.Events":{ON_EXCEPTION:[5,3,1,""],ON_SUCCESS:[5,3,1,""]},"asyncworker.options.Options":{BULK_FLUSH_INTERVAL:[5,3,1,""],BULK_SIZE:[5,3,1,""],MAX_CONCURRENCY:[5,3,1,""]},"asyncworker.options.RouteTypes":{AMQP_RABBITMQ:[5,3,1,""],HTTP:[5,3,1,""],SSE:[5,3,1,""]},"asyncworker.rabbitmq":{message:[9,0,0,"-"]},"asyncworker.rabbitmq.message":{RabbitMQMessage:[9,1,1,""]},"asyncworker.rabbitmq.message.RabbitMQMessage":{accept:[9,2,1,""],body:[9,2,1,""],process_exception:[9,2,1,""],process_success:[9,2,1,""],reject:[9,2,1,""],serialized_data:[9,2,1,""]},"asyncworker.routes":{AMQPRoute:[5,1,1,""],HTTPRoute:[5,1,1,""],Model:[5,1,1,""],Route:[5,1,1,""],RoutesRegistry:[5,1,1,""],SSERoute:[5,1,1,""],call_http_handler:[5,5,1,""],http_handler_wrapper:[5,5,1,""]},"asyncworker.routes.HTTPRoute":{aiohttp_routes:[5,2,1,""],validate_method:[5,2,1,""]},"asyncworker.routes.Model":{get:[5,2,1,""],keys:[5,2,1,""]},"asyncworker.routes.Route":{factory:[5,2,1,""]},"asyncworker.routes.RoutesRegistry":{add_route:[5,2,1,""],amqp_routes:[5,3,1,""],http_routes:[5,3,1,""],route_for:[5,2,1,""],sse_routes:[5,3,1,""]},"asyncworker.routes.SSERoute":{add_default_headers:[5,2,1,""]},"asyncworker.signals":{base:[10,0,0,"-"],handlers:[11,0,0,"-"]},"asyncworker.signals.base":{Freezable:[10,1,1,""],Signal:[10,1,1,""]},"asyncworker.signals.base.Freezable":{freeze:[10,2,1,""],frozen:[10,2,1,""]},"asyncworker.signals.base.Signal":{send:[10,2,1,""]},"asyncworker.signals.handlers":{base:[11,0,0,"-"],http:[11,0,0,"-"],rabbitmq:[11,0,0,"-"],sse:[11,0,0,"-"]},"asyncworker.signals.handlers.base":{SignalHandler:[11,1,1,""]},"asyncworker.signals.handlers.base.SignalHandler":{shutdown:[11,2,1,""],startup:[11,2,1,""]},"asyncworker.signals.handlers.http":{HTTPServer:[11,1,1,""]},"asyncworker.signals.handlers.http.HTTPServer":{shutdown:[11,2,1,""],startup:[11,2,1,""]},"asyncworker.signals.handlers.rabbitmq":{RabbitMQ:[11,1,1,""]},"asyncworker.signals.handlers.rabbitmq.RabbitMQ":{startup:[11,2,1,""]},"asyncworker.signals.handlers.sse":{SSE:[11,1,1,""]},"asyncworker.signals.handlers.sse.SSE":{startup:[11,2,1,""]},"asyncworker.sse":{consumer:[12,0,0,"-"],message:[12,0,0,"-"]},"asyncworker.sse.consumer":{SSEConsumer:[12,1,1,""],State:[12,1,1,""]},"asyncworker.sse.consumer.SSEConsumer":{interval:[12,3,1,""],keep_runnig:[12,2,1,""],on_connection:[12,2,1,""],on_connection_error:[12,2,1,""],on_event:[12,2,1,""],on_exception:[12,2,1,""],start:[12,2,1,""]},"asyncworker.sse.consumer.State":{EVENT_DATA_FOUND:[12,3,1,""],EVENT_NAME_FOUND:[12,3,1,""],WAIT_FOR_DATA:[12,3,1,""]},"asyncworker.sse.message":{SSEMessage:[12,1,1,""]},"asyncworker.task_runners":{ScheduledTaskRunner:[5,1,1,""]},"asyncworker.task_runners.ScheduledTaskRunner":{can_dispatch_task:[5,2,1,""],start:[5,2,1,""],stop:[5,2,1,""]},"asyncworker.testing":{HttpClientContext:[13,1,1,""],http_client:[13,5,1,""]},"asyncworker.time":{ClockTicker:[5,1,1,""]},"asyncworker.time.ClockTicker":{stop:[5,2,1,""]},"asyncworker.types":{registry:[14,0,0,"-"],resolver:[14,0,0,"-"]},"asyncworker.types.registry":{TypesRegistry:[14,1,1,""]},"asyncworker.types.registry.TypesRegistry":{get:[14,2,1,""],set:[14,2,1,""]},"asyncworker.types.resolver":{ArgResolver:[14,1,1,""],MissingTypeAnnotationError:[14,4,1,""]},"asyncworker.types.resolver.ArgResolver":{resolve_param:[14,2,1,""],wrap:[14,2,1,""]},"asyncworker.utils":{Timeit:[5,1,1,""],entrypoint:[5,5,1,""]},"asyncworker.utils.Timeit":{TRANSACTIONS_KEY:[5,3,1,""]},asyncworker:{app:[5,0,0,"-"],bucket:[5,0,0,"-"],conf:[5,0,0,"-"],connections:[6,0,0,"-"],consumer:[5,0,0,"-"],easyqueue:[7,0,0,"-"],exceptions:[8,0,0,"-"],options:[5,0,0,"-"],rabbitmq:[9,0,0,"-"],routes:[5,0,0,"-"],signals:[10,0,0,"-"],sse:[12,0,0,"-"],task_runners:[5,0,0,"-"],testing:[13,0,0,"-"],time:[5,0,0,"-"],types:[14,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"abstract":[5,7],"aplic\u00e1":17,"aplica\u00e7\u00e3o":3,"ass\u00edncrono":3,"atrav\u00e9":[17,19],"autentica\u00e7\u00e3o":17,"byte":[5,6,7,12],"c\u00f3digo":[17,20],"ci\u00eancia":17,"class":[5,6,7,9,10,11,12,13,14],"conex\u00e3o":20,"conte\u00fado":[],"default":5,"descri\u00e7\u00e3o":2,"din\u00e2mico":17,"enum":[5,12],"espec\u00edficament":16,"est\u00e1":[17,20],"est\u00e3o":17,"est\u00edmulo":[3,16],"estar\u00e1":20,"ficar\u00e1":20,"float":5,"fun\u00e7\u00e3o":17,"function":17,"import":[17,20],"in\u00edcio":[3,19],"informa\u00e7\u00f5":17,"inst\u00e2ncia":[17,20],"int":[5,7,9],"integra\u00e7\u00e3o":2,"intermedi\u00e1rio":17,"introdu\u00e7\u00e3o":3,"lan\u00e7ar":20,"m\u00e9todo":1,"m\u00f3dulo":20,"n\u00e3o":[2,17],"necess\u00e1rio":17,"new":[5,6,7],"poss\u00edvel":[17,20],"pr\u00f3prio":17,"r\u00e1pido":[3,19],"raz\u00e3o":17,"receber\u00e1":20,"requisi\u00e7\u00e3o":[3,20],"requisi\u00e7\u00f5":[16,17,19],"resolu\u00e7\u00e3o":17,"respons\u00e1vel":17,"return":[5,6,7,17,20],"saber\u00e1":17,"ser\u00e1":16,"static":5,"true":[5,6,9,20],"usu\u00e1rio":17,"v\u00e1lido":17,"v\u00e1ria":3,"voc\u00ea":[3,20],THe:5,The:[5,7],Useful:7,_asyncio:5,_on_ev:20,_type:14,_wrapper:17,abaixo:3,abc:[5,6],abstracteventloop:7,accept:9,acesso:20,ack:[5,7,9,20],act:5,action:[5,9],add:[5,6],add_default_head:5,add_rout:5,adiant:17,adiciona:17,adicionado:17,adicionando:1,adicionar:1,aioamqp:7,aiohttp:[5,17,20],aiohttp_rout:5,alguma:[17,20],algun:16,all:[5,6,7,10],allow:[5,6],allow_mut:5,along:5,also:[5,6],amba:20,ambo:20,amqp:16,amqp_conn:20,amqp_messag:9,amqp_rabbitmq:[5,20],amqp_rout:5,amqpconnect:[5,6,7,20],amqpmessag:[5,7,9],amqprout:5,ancestr:[5,6],ani:[5,6,7,10,14],apena:19,aplicado:17,aplicando:19,apllicado:[],app:[11,13,15,17,20],appid:20,applic:[5,7],aqui:17,arbitrary_types_allow:[5,6],arg:10,argresolv:14,argument:[5,7,10],aser:[],asgard:20,assim:[17,20],assinatura:17,assumindo:20,async:[5,6,7,9,10,11,12,17,20],asyncio:[5,7,10],asynciter:5,asyncowk:17,asyncwok:[],asyncwork:[1,16,17,20],asyncworker_:5,asynqueu:[5,7],asynwork:20,atendar:20,atributo:17,atualment:16,autenticado:17,autenticar:17,auth_requir:17,author:17,auto:[5,6],automat:5,automaticament:20,autonameenum:5,avail:[5,6],await:[5,17],backend:[3,19],base:[5,6,7,8,9,12,13,14,15],baseapp:[],basejsonqueu:7,basemodel:[5,6],basequeu:7,baseset:5,basic_auth:17,befor:[5,7],behav:[5,10],bem:17,bla:[],bodi:[5,7,9,20],bool:5,broker:[3,7],bucket:[12,15],bucket_class:[5,12],bucketfullexcept:5,bulk_flush_interv:5,bulk_siz:[5,20],cada:20,call:[5,7],call_http_handl:[5,17],callabl:[5,7],callback:[5,7,10],can:7,can_dispatch_task:5,cancel:7,capaz:20,caso:20,caus:5,chamado:17,chamar:17,chang:1,changelog:3,channel:7,classmethod:[5,6],client:7,clock:5,clocktick:5,close:7,code:1,codeown:1,coerent:2,collect:[5,6,10],com:[2,17,20],comando:20,common:[5,6],como:[3,17],condit:[5,8],conf:15,config:[5,6],confirmada:20,connect:[8,10,15,20],connection_paramet:7,connectionsmap:[5,6],consiga:17,consum:[7,15],consume_all_queu:5,consumer_nam:7,consumer_tag:[5,7],consumindo:19,consumo:16,consumpt:[5,7],content:15,content_typ:7,conter:17,coro:5,coro_ref:14,corotina:17,coroutin:[5,7,10],correta:17,corretament:17,count:20,counter:[5,6],coverag:1,curl:20,custom:[5,7],customizado:19,dado:[16,17,19],data:[5,6,7,10,20],declara:1,declaramo:20,decod:7,decor:[5,6,19],decorada:17,decorando:17,def:[17,20],defaultvalu:5,defin:[5,8],definit:[5,8],dele:17,deleg:7,delegate_class:7,delivery_tag:[5,7,9],deliverymod:7,depend:1,dependencia:2,deployment_info:20,deployment_success:20,desconectado:20,deseri:[5,7],deserialization_method:7,deserialized_data:7,dess:17,detalh:17,deve:17,devem:17,devolvida:20,dict:[5,12],diferent:[3,16],diretament:17,disso:17,doc:[1,17],dos:17,drain_handl:20,dure:[5,7],each:[5,6],easyqueu:[1,5,6,9,15],econtra:3,ele:17,emptyqueueexcept:7,encontrado:17,encontrando:17,endpoint:[16,19],entando:17,entend:[3,16],entrypoint:5,enumer:[5,12],env_prefix:5,env_set:5,envelop:7,enviado:20,erro:[1,20],error:[5,20],escrev:[3,17],escrita:[],ess:[17,20],essa:[3,17],estamo:20,estar:17,estavam:2,estimulado:17,etc:[],event:[3,5,7,10,16,19],event_bodi:12,event_data_found:12,event_nam:[12,20],event_name_found:12,event_raw_bodi:12,evento:[3,16,20],everi:[5,7],except:[12,14,15,20],exchang:[5,6,7],exemplo:[17,20],extra_registri:14,extrair:17,facilitar:[],factori:5,fail:[5,7],falaremo:20,fals:[5,7],faz:17,fazer:17,featur:1,fila:19,fire:10,fixo:3,flask:[],fluentd:20,foo:[],framework:3,freez:[5,10],freezabl:[5,6,10],frent:20,from:[7,17,20],frozen:10,functool:17,further:[5,7],futur:5,gener:[5,6,7],gerado:[3,20],geral:20,get:[5,7,14,17,20],get_authenticated_us:17,get_connect:5,get_connection_for_rout:5,given:5,glob:[],guest:20,guia:3,handl:[5,7],handler:[3,5,10,16,19,20],handler_error:[5,7],happen:5,header:17,heartbeat:7,hello:20,hook:1,host:[5,7,20],hostnam:[],html:17,http:[3,5,10,16,18,19],http_client:[5,13],http_handler_wrapp:5,http_rout:5,httpclientcontext:[5,13],httpm:[],httprout:5,httpserver:[5,11],httpstatu:17,ideia:20,identifi:7,implement:[5,7,10],implementa:16,indeterminado:3,index:[3,20],initi:[5,7],inner:17,insert:1,insert_user_into_type_registri:[],insid:5,inspirado:[],instanc:[5,7],instancia:17,interv:[5,12],intervalo:3,invalid:[5,8],invalidconnect:[5,8],invalidmessagesizeexcept:7,invalidrout:[5,8],is_connect:7,is_empti:5,is_ful:5,isn:7,isso:[17,20],issu:1,item:[5,6],iter:[5,6],json:[7,20],json_respons:[17,20],jsonqueu:[5,6,7],junto:17,keep:[5,6],keep_runnig:[5,12],kei:[5,6,7],kwarg:[1,5,7,10],len:20,lendo:19,like:5,linha:20,list:[5,6,10,12],lista:[17,20],lock:10,log:[7,20],logger:7,loop:[5,7,20],los:17,mai:[2,5,7,16,19,20],main:[5,6,20],map:[5,6],max_concurr:5,max_message_length:7,melhorar:1,mensagem:[1,3,20],mensagen:[16,20],mesmo:20,messag:[5,15,20],messageerror:[5,7],meth:[],method:[1,10,17,20],microframework:[],missingtypeannotationerror:14,model:[5,17],modul:[1,3,15],momento:17,mostrar:20,mostraremo:17,move:1,msg:[5,7],mudando:2,mutablemap:5,my_handler_decor:17,myproject:17,mywork:20,name:[5,6,7,10,20],nao:1,need:7,ness:20,non_persist:7,none:[5,6,7,12,14],notif:7,obj:14,object:[5,6,7,9,10,11,12,13,14],objetivo:3,objeto:[17,20],occur:5,on_before_start_consumpt:[5,7],on_connect:12,on_connection_error:[5,7,12],on_consumption_start:[5,7],on_error:7,on_ev:12,on_except:[5,9,12],on_message_handle_error:[5,7],on_queue_error:5,on_queue_messag:[5,7],on_startup:5,on_success:[5,9],onc:[5,7],ond:17,one:7,option:[6,7,9,14,15,20],org:17,origem:16,origen:3,orign:3,overwritten:[5,7],owner:10,packag:15,page:3,para:[2,3,4,17,20],param:7,param_typ:14,paramet:[5,7],parametro:17,passa:17,passado:17,password:[5,7,12,20],payload:7,pegando:17,pelo:[16,17,20],permit:17,persist:7,plan:20,podem:3,podemo:17,poderem:20,poderia:17,ponto:20,pop_al:5,popular:17,por:[3,16,17],posit:1,possa:17,possibilidad:16,prametro:17,precisam:20,precisarmo:17,preciso:17,prefetch_count:[5,7,20],princip:17,print:20,process_except:9,process_success:9,processado:16,projeto:[2,4,16],properti:[5,7,9,10],provid:7,publish:7,puder:17,put:[5,6,7],pydant:[2,5,6],python:3,quaisquer:17,qualquer:3,quando:[1,17,20],que:[3,16,19,20],quem:17,queue:[5,6,15],queue_nam:[5,7],queueconsumerdeleg:[5,7],rabbitmq:[3,5,10,15,16,19],rabbitmqmessag:[5,9],rais:[5,7],random:7,raw:5,readi:[5,7],receb:[16,17,20],receba:[3,17],recebem:19,recebemo:17,recebendo:19,receiv:[5,10,20],reconectar:20,recorrent:3,ref:[],regist:[5,6,10],registri:17,regra:17,reject:[5,7,9,20],remov:1,report:1,req:[17,20],request:[5,19,20],requeu:[5,7,9,20],resolve_param:14,respons:[5,6,17,20],retorna:17,retornada:17,rodado:[2,20],rodando:19,rodar:20,rode:3,rota:20,rout:[1,7,8,15,17,20],route_for:[1,5],route_info:[5,12],route_typ:[5,6],routedef:5,routesregistri:[1,5],routetyp:[5,6,17,20],routing_kei:[5,6,7],run:[5,20],run_everi:5,run_every_max_concurr:5,run_on_shutdown:5,run_on_startup:[1,5],schedul:5,scheduledtaskrunn:5,search:3,second:5,seconds_between_conn_retri:7,seguint:[16,20],seja:[17,20],sem:20,sempr:[17,20],send:[7,10],sendo:2,ser:[2,3,17,20],seria:20,serial:7,serializ:7,serialized_data:[5,6,7,9],server:[3,16,19],servidor:[3,20],set:[5,14,17],set_connect:[5,6],setup:2,seu:[16,17,19],should:[5,7],shutdown:[5,11],shutdown_os_sign:5,side:[3,16,19],sigint:5,signal:[5,6,15],signalhandl:11,sigterm:5,simpl:17,simplesmet:17,size:5,sleep:5,sobr:[17,20],someth:5,sourc:[5,6,7,8,9,10,11,12,13,14],sphinx:1,sse:[5,10,15,20],sse_conn:20,sse_rout:5,sseapplic:[],sseconnect:[5,6,20],sseconsum:12,ssemessag:12,sserout:5,stabl:17,stage:[5,7],start:[5,7,12],startup:[5,11],state:12,statu:17,status_update_ev:20,stop:[5,7],stop_consum:7,str:[5,6,7,12],stream:[],sua:20,subclass:[5,6],submodul:15,subpackag:15,sucesso:17,suficient:17,suport:16,suporta:16,tag:[1,2,7],take:10,task:[5,20],task_runn:15,taskid:20,taskstatu:20,tem:[3,17],temo:17,tempo:3,tentanto:20,test:[2,15],text:[],tha:10,tick:5,time:[7,15],timeit:5,tipo:17,titlesonli:[],toda:17,todo:17,topo:17,track:[5,6],transact:5,transactions_kei:5,trigger:[5,7],type:[5,6,7,12,17,20],type_definit:14,typehint:17,types_registri:17,typesregistri:[14,17],uma:[1,3,17,19],unauthor:17,uncaught:[5,7],undecodablemessageexcept:7,union:[5,6,7,12],unpars:5,url:[12,20],usag:[5,6],usando:20,usar:17,use:10,used:[5,7],user:[17,20],userdict:5,userlist:10,usernam:[5,7,12],using:10,uso:3,util:15,valid:[5,7],validate_method:5,valu:[5,6],valueerror:[5,7,8],veja:17,vejamo:17,vem:17,vez:2,vhost:[5,6,20],via:16,virtual:[5,6],virtual_host:7,wait:5,wait_for_data:12,web:[17,20],web_request:5,web_routedef:5,when:[5,7],which:10,with_typ:[5,6],worker:[3,16,19],world:20,wrap:[14,17],xxxxxxxxxxxxx:5},titles:["Changelog","0.10.0","0.10.1","Bem vindos \u00e0 documenta\u00e7\u00e3o oficial do projeto Asyncworker","Introdu\u00e7\u00e3o","asyncworker package","asyncworker.connections package","asyncworker.easyqueue package","asyncworker.exceptions package","asyncworker.rabbitmq package","asyncworker.signals package","asyncworker.signals.handlers package","asyncworker.sse package","asyncworker.testing package","asyncworker.types package","asyncworker","Backends","HTTP","Handlers","Guia de uso","In\u00edcio r\u00e1pido"],titleterms:{"atrav\u00e9":20,"documenta\u00e7\u00e3o":3,"in\u00edcio":20,"introdu\u00e7\u00e3o":4,"prop\u00f3sito":[],"r\u00e1pido":20,"requisi\u00e7\u00f5":20,apena:17,aplicando:17,app:5,asyncwork:[3,5,6,7,8,9,10,11,12,13,14,15],backend:16,base:[10,11],bem:3,bucket:5,changelog:0,conf:5,connect:[5,6,7],consum:[5,12],consumindo:20,content:[5,6,7,8,9,10,11,12,13,14],customizado:17,dado:20,decor:17,easyqueu:7,endpoint:20,event:20,except:[5,7,8],fila:20,guia:19,handler:[11,17,18],http:[11,17,20],indic:3,lendo:20,mai:17,messag:[7,9,12],modul:[5,6,7,8,9,10,11,12,13,14],ofici:3,option:5,packag:[5,6,7,8,9,10,11,12,13,14],projeto:3,que:17,queue:7,rabbitmq:[9,11,20],recebem:17,recebendo:20,registri:14,request:17,resolv:14,rodando:20,rout:5,server:20,seu:20,side:20,signal:[10,11],sse:[11,12],submodul:[5,7,9,10,11,12,14],subpackag:[5,10],tabl:3,task_runn:5,test:[5,13],time:5,type:14,uma:20,uso:19,util:5,vindo:3,worker:20}})