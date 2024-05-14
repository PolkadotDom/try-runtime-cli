(function() {var type_impls = {
"sp_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Recorder%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#98\">source</a><a href=\"#impl-Clone-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sp_trie/recorder/struct.Recorder.html\" title=\"struct sp_trie::recorder::Recorder\">Recorder</a>&lt;H&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#99\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sp_trie/recorder/struct.Recorder.html\" title=\"struct sp_trie::recorder::Recorder\">Recorder</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_api::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Recorder%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#92\">source</a><a href=\"#impl-Default-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"sp_trie/recorder/struct.Recorder.html\" title=\"struct sp_trie::recorder::Recorder\">Recorder</a>&lt;H&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#93\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"sp_trie/recorder/struct.Recorder.html\" title=\"struct sp_trie::recorder::Recorder\">Recorder</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","sp_api::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Recorder%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#107\">source</a><a href=\"#impl-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"struct\" href=\"sp_trie/recorder/struct.Recorder.html\" title=\"struct sp_trie::recorder::Recorder\">Recorder</a>&lt;H&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_trie_recorder\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#115-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.as_trie_recorder\" class=\"fn\">as_trie_recorder</a>(\n    &amp;self,\n    storage_root: &lt;H as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>\n) -&gt; impl <a class=\"trait\" href=\"trie_db/trait.TrieRecorder.html\" title=\"trait trie_db::TrieRecorder\">TrieRecorder</a>&lt;&lt;H as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the recorder as <a href=\"trie_db/trait.TrieRecorder.html\" title=\"trait trie_db::TrieRecorder\"><code>TrieRecorder</code></a> compatible type.</p>\n<ul>\n<li><code>storage_root</code>: The storage root of the trie for which accesses are recorded. This is\nimportant when recording access to different tries at once (like top and child tries).</li>\n</ul>\n<p>NOTE: This locks a mutex that stays locked until the return value is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain_storage_proof\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#135\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.drain_storage_proof\" class=\"fn\">drain_storage_proof</a>(self) -&gt; <a class=\"struct\" href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\">StorageProof</a></h4></section></summary><div class=\"docblock\"><p>Drain the recording into a <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n<p>While a recorder can be cloned, all share the same internal state. After calling this\nfunction, all other instances will have their internal state reset as well.</p>\n<p>If you don’t want to drain the recorded state, use <a href=\"sp_trie/recorder/struct.Recorder.html#method.to_storage_proof\" title=\"method sp_trie::recorder::Recorder::to_storage_proof\"><code>Self::to_storage_proof</code></a>.</p>\n<p>Returns the <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_storage_proof\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#146\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.to_storage_proof\" class=\"fn\">to_storage_proof</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\">StorageProof</a></h4></section></summary><div class=\"docblock\"><p>Convert the recording to a <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n<p>In contrast to <a href=\"sp_trie/recorder/struct.Recorder.html#method.drain_storage_proof\" title=\"method sp_trie::recorder::Recorder::drain_storage_proof\"><code>Self::drain_storage_proof</code></a> this doesn’t consumes and doesn’t clears the\nrecordings.</p>\n<p>Returns the <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.estimate_encoded_size\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#155\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.estimate_encoded_size\" class=\"fn\">estimate_encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the estimated encoded size of the proof.</p>\n<p>The estimation is based on all the nodes that were accessed until now while\naccessing the trie.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#162\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Reset the state.</p>\n<p>This discards all recorded data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_transaction\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#168\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.start_transaction\" class=\"fn\">start_transaction</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Start a new transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rollback_transaction\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#176\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.rollback_transaction\" class=\"fn\">rollback_transaction</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Rollback the latest transaction.</p>\n<p>Returns an error if there wasn’t any active transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_transaction\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_trie/recorder.rs.html#210\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_trie/recorder/struct.Recorder.html#tymethod.commit_transaction\" class=\"fn\">commit_transaction</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Commit the latest transaction.</p>\n<p>Returns an error if there wasn’t any active transaction.</p>\n</div></details></div></details>",0,"sp_api::ProofRecorder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()