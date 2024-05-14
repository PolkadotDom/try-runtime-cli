(function() {var type_impls = {
"libp2p":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Behaviour\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#170\">source</a><a href=\"#impl-Behaviour\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#172\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/identify/struct.Behaviour.html#tymethod.new\" class=\"fn\">new</a>(config: <a class=\"struct\" href=\"libp2p/identify/struct.Config.html\" title=\"struct libp2p::identify::Config\">Config</a>) -&gt; <a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a></h4></section></summary><div class=\"docblock\"><p>Creates a new identify <a href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\"><code>Behaviour</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#190-192\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/identify/struct.Behaviour.html#tymethod.push\" class=\"fn\">push</a>&lt;I&gt;(&amp;mut self, peers: I)<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"libp2p/struct.PeerId.html\" title=\"struct libp2p::PeerId\">PeerId</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Initiates an active push of the local peer information to the given peers.</p>\n</div></details></div></details>",0,"libp2p::identify::Identify"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NetworkBehaviour-for-Behaviour\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#238\">source</a><a href=\"#impl-NetworkBehaviour-for-Behaviour\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a> for <a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.ConnectionHandler\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ConnectionHandler\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" class=\"associatedtype\">ConnectionHandler</a> = Handler</h4></section></summary><div class='docblock'>Handler for all the protocols the network behaviour supports.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.OutEvent\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.OutEvent\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.OutEvent\" class=\"associatedtype\">OutEvent</a> = <a class=\"enum\" href=\"libp2p/identify/enum.Event.html\" title=\"enum libp2p::identify::Event\">Event</a></h4></section></summary><div class='docblock'>Event generated by the <code>NetworkBehaviour</code> and that the swarm will report back.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_established_inbound_connection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#242-248\">source</a><a href=\"#method.handle_established_inbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_established_inbound_connection\" class=\"fn\">handle_established_inbound_connection</a>(\n    &amp;mut self,\n    _: <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionId.html\" title=\"struct libp2p::swarm::ConnectionId\">ConnectionId</a>,\n    peer: <a class=\"struct\" href=\"libp2p/struct.PeerId.html\" title=\"struct libp2p::PeerId\">PeerId</a>,\n    _: &amp;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>,\n    remote_addr: &amp;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;&lt;<a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" title=\"type libp2p::swarm::NetworkBehaviour::ConnectionHandler\">ConnectionHandler</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html\" title=\"trait libp2p::swarm::IntoConnectionHandler\">IntoConnectionHandler</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html#associatedtype.Handler\" title=\"type libp2p::swarm::IntoConnectionHandler::Handler\">Handler</a>, <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionDenied.html\" title=\"struct libp2p::swarm::ConnectionDenied\">ConnectionDenied</a>&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every established inbound connection. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_established_inbound_connection\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_established_outbound_connection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#260-266\">source</a><a href=\"#method.handle_established_outbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_established_outbound_connection\" class=\"fn\">handle_established_outbound_connection</a>(\n    &amp;mut self,\n    _: <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionId.html\" title=\"struct libp2p::swarm::ConnectionId\">ConnectionId</a>,\n    peer: <a class=\"struct\" href=\"libp2p/struct.PeerId.html\" title=\"struct libp2p::PeerId\">PeerId</a>,\n    addr: &amp;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>,\n    _: <a class=\"enum\" href=\"libp2p/core/enum.Endpoint.html\" title=\"enum libp2p::core::Endpoint\">Endpoint</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;&lt;<a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" title=\"type libp2p::swarm::NetworkBehaviour::ConnectionHandler\">ConnectionHandler</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html\" title=\"trait libp2p::swarm::IntoConnectionHandler\">IntoConnectionHandler</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html#associatedtype.Handler\" title=\"type libp2p::swarm::IntoConnectionHandler::Handler\">Handler</a>, <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionDenied.html\" title=\"struct libp2p::swarm::ConnectionDenied\">ConnectionDenied</a>&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every established outbound connection. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_established_outbound_connection\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_connection_handler_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#278-283\">source</a><a href=\"#method.on_connection_handler_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#tymethod.on_connection_handler_event\" class=\"fn\">on_connection_handler_event</a>(\n    &amp;mut self,\n    peer_id: <a class=\"struct\" href=\"libp2p/struct.PeerId.html\" title=\"struct libp2p::PeerId\">PeerId</a>,\n    connection_id: <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionId.html\" title=\"struct libp2p::swarm::ConnectionId\">ConnectionId</a>,\n    event: &lt;&lt;&lt;<a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" title=\"type libp2p::swarm::NetworkBehaviour::ConnectionHandler\">ConnectionHandler</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html\" title=\"trait libp2p::swarm::IntoConnectionHandler\">IntoConnectionHandler</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html#associatedtype.Handler\" title=\"type libp2p::swarm::IntoConnectionHandler::Handler\">Handler</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.ConnectionHandler.html\" title=\"trait libp2p::swarm::ConnectionHandler\">ConnectionHandler</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.ConnectionHandler.html#associatedtype.OutEvent\" title=\"type libp2p::swarm::ConnectionHandler::OutEvent\">OutEvent</a>\n)</h4></section></summary><div class='docblock'>Informs the behaviour about an event generated by the <a href=\"libp2p/swarm/trait.ConnectionHandler.html\" title=\"trait libp2p::swarm::ConnectionHandler\"><code>ConnectionHandler</code></a>\ndedicated to the peer identified by <code>peer_id</code>. for the behaviour. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#tymethod.on_connection_handler_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#323-327\">source</a><a href=\"#method.poll\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#tymethod.poll\" class=\"fn\">poll</a>(\n    &amp;mut self,\n    _cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n    params: &amp;mut impl <a class=\"trait\" href=\"libp2p/swarm/trait.PollParameters.html\" title=\"trait libp2p::swarm::PollParameters\">PollParameters</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"libp2p/swarm/enum.ToSwarm.html\" title=\"enum libp2p::swarm::ToSwarm\">ToSwarm</a>&lt;&lt;<a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.OutEvent\" title=\"type libp2p::swarm::NetworkBehaviour::OutEvent\">OutEvent</a>, &lt;&lt;&lt;<a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" title=\"type libp2p::swarm::NetworkBehaviour::ConnectionHandler\">ConnectionHandler</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html\" title=\"trait libp2p::swarm::IntoConnectionHandler\">IntoConnectionHandler</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.IntoConnectionHandler.html#associatedtype.Handler\" title=\"type libp2p::swarm::IntoConnectionHandler::Handler\">Handler</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.ConnectionHandler.html\" title=\"trait libp2p::swarm::ConnectionHandler\">ConnectionHandler</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.ConnectionHandler.html#associatedtype.InEvent\" title=\"type libp2p::swarm::ConnectionHandler::InEvent\">InEvent</a>&gt;&gt;</h4></section></summary><div class='docblock'>Polls for things that swarm should do. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#tymethod.poll\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_pending_outbound_connection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#372-378\">source</a><a href=\"#method.handle_pending_outbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_pending_outbound_connection\" class=\"fn\">handle_pending_outbound_connection</a>(\n    &amp;mut self,\n    _connection_id: <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionId.html\" title=\"struct libp2p::swarm::ConnectionId\">ConnectionId</a>,\n    maybe_peer: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"libp2p/struct.PeerId.html\" title=\"struct libp2p::PeerId\">PeerId</a>&gt;,\n    _addresses: &amp;[<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>],\n    _effective_role: <a class=\"enum\" href=\"libp2p/core/enum.Endpoint.html\" title=\"enum libp2p::core::Endpoint\">Endpoint</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>&gt;, <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionDenied.html\" title=\"struct libp2p::swarm::ConnectionDenied\">ConnectionDenied</a>&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every outbound connection attempt. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_pending_outbound_connection\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_swarm_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_identify/behaviour.rs.html#387\">source</a><a href=\"#method.on_swarm_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#tymethod.on_swarm_event\" class=\"fn\">on_swarm_event</a>(\n    &amp;mut self,\n    event: <a class=\"enum\" href=\"libp2p/swarm/enum.FromSwarm.html\" title=\"enum libp2p::swarm::FromSwarm\">FromSwarm</a>&lt;'_, &lt;<a class=\"struct\" href=\"libp2p/identify/struct.Behaviour.html\" title=\"struct libp2p::identify::Behaviour\">Behaviour</a> as <a class=\"trait\" href=\"libp2p/swarm/trait.NetworkBehaviour.html\" title=\"trait libp2p::swarm::NetworkBehaviour\">NetworkBehaviour</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" title=\"type libp2p::swarm::NetworkBehaviour::ConnectionHandler\">ConnectionHandler</a>&gt;\n)</h4></section></summary><div class='docblock'>Informs the behaviour about an event from the <a href=\"libp2p/struct.Swarm.html\" title=\"struct libp2p::Swarm\"><code>Swarm</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_handler\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_swarm/behaviour.rs.html#152\">source</a><a href=\"#method.new_handler\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.new_handler\" class=\"fn\">new_handler</a>(&amp;mut self) -&gt; Self::<a class=\"associatedtype\" href=\"libp2p/swarm/trait.NetworkBehaviour.html#associatedtype.ConnectionHandler\" title=\"type libp2p::swarm::NetworkBehaviour::ConnectionHandler\">ConnectionHandler</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 0.42.0: Use one or more of <code>NetworkBehaviour::{handle_pending_inbound_connection,handle_established_inbound_connection,handle_pending_outbound_connection,handle_established_outbound_connection}</code> instead.</span></div></span><div class='docblock'>Creates a new <a href=\"libp2p/swarm/trait.ConnectionHandler.html\" title=\"trait libp2p::swarm::ConnectionHandler\"><code>ConnectionHandler</code></a> for a connection with a peer. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.new_handler\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_pending_inbound_connection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_swarm/behaviour.rs.html#162-167\">source</a><a href=\"#method.handle_pending_inbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_pending_inbound_connection\" class=\"fn\">handle_pending_inbound_connection</a>(\n    &amp;mut self,\n    _connection_id: <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionId.html\" title=\"struct libp2p::swarm::ConnectionId\">ConnectionId</a>,\n    _local_addr: &amp;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>,\n    _remote_addr: &amp;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"libp2p/swarm/struct.ConnectionDenied.html\" title=\"struct libp2p::swarm::ConnectionDenied\">ConnectionDenied</a>&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every new inbound connection. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.handle_pending_inbound_connection\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.addresses_of_peer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_swarm/behaviour.rs.html#252\">source</a><a href=\"#method.addresses_of_peer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.addresses_of_peer\" class=\"fn\">addresses_of_peer</a>(&amp;mut self, _: &amp;<a class=\"struct\" href=\"libp2p/struct.PeerId.html\" title=\"struct libp2p::PeerId\">PeerId</a>) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"libp2p/struct.Multiaddr.html\" title=\"struct libp2p::Multiaddr\">Multiaddr</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use <code>NetworkBehaviour::handle_pending_outbound_connection</code> instead.</span></div></span><div class='docblock'>Addresses that this behaviour is aware of for this specific peer, and that may allow\nreaching the peer. <a href=\"libp2p/swarm/trait.NetworkBehaviour.html#method.addresses_of_peer\">Read more</a></div></details></div></details>","NetworkBehaviour","libp2p::identify::Identify"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()