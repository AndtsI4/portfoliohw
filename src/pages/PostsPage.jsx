import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';

/**
 * Posts Page Component (Dedicated Multi-Page Route /posts)
 * Integrated with JSONPlaceholder API:
 * - GET /posts (All 100 posts)
 * - GET /posts/:id/comments (Interactive comments viewer)
 * - POST /posts (Create post with real HTTP 201 Created feedback)
 * - Real-time keyword search by title and content
 */
export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCommentsPostId, setActiveCommentsPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

  // New post modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message || 'სტატიების ჩატვირთვა ვერ მოხერხდა');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch comments for a specific post
  const toggleComments = async (postId) => {
    if (activeCommentsPostId === postId) {
      setActiveCommentsPostId(null);
      setComments([]);
      return;
    }

    setActiveCommentsPostId(postId);
    setCommentsLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      setComments(data);
    } catch (err) {
      setComments([]);
      showToast('კომენტარების ჩატვირთვა ვერ მოხერხდა');
    } finally {
      setCommentsLoading(false);
    }
  };

  // Add post with POST /posts
  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newBody.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle,
          body: newBody,
          userId: 1
        })
      });

      const created = await res.json();
      const newPostItem = {
        ...created,
        id: created.id || Date.now()
      };

      setPosts((prev) => [newPostItem, ...prev]);
      setIsModalOpen(false);
      setNewTitle('');
      setNewBody('');
      showToast(`სტატია წარმატებით გამოქვეყნდა (HTTP ${res.status} Created)`);
    } catch (err) {
      showToast('დამატება ვერ მოხერხდა');
    } finally {
      setSubmitting(false);
    }
  };

  // Filter posts by search query (title or body)
  const filteredPosts = posts.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return p.title?.toLowerCase().includes(q) || p.body?.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-down">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-dark-900 border border-slate-700 text-xs sm:text-sm text-slate-100 shadow-2xl font-mono">
            <span className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></span>
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <SectionHeader
        badge="JSONPlaceholder • /posts რესურსი"
        badgeColor="emerald"
        title="ტექნიკური სტატიები & ჩანაწერები"
        icon="fa-regular fa-newspaper"
        description="მონაცემები დინამიურად იტვირთება https://jsonplaceholder.typicode.com/posts ენდფოინთიდან ძებნისა და კომენტარების მხარდაჭერით"
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-tech-emerald/20 hover:bg-tech-emerald/30 text-tech-emerald border border-tech-emerald/40 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-plus text-[10px]"></i>
              <span>ახალი სტატია (POST)</span>
            </button>
            <button
              onClick={fetchPosts}
              className="p-2 rounded-xl bg-dark-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors"
              title="განახლება"
            >
              <i className={`fa-solid fa-arrows-rotate ${loading ? 'animate-spin' : ''}`}></i>
            </button>
          </div>
        }
      />

      {/* Search Bar & Result Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="სტატიების ძებნა სათაურით ან ტექსტით..."
            className="w-full bg-dark-900/90 border border-slate-800 focus:border-tech-emerald rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none font-mono transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tech-emerald"></span>
          <span>ნაჩვენებია: {filteredPosts.length} / {posts.length} სტატია</span>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-20 text-center text-slate-400 space-y-3 bg-dark-900/40 rounded-2xl border border-slate-800/80 font-mono">
          <i className="fa-solid fa-circle-notch animate-spin text-2xl text-tech-emerald"></i>
          <p className="text-xs sm:text-sm">სტატიები იტვირთება JSONPlaceholder-დან...</p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-3 font-mono text-xs">
          <i className="fa-solid fa-triangle-exclamation text-2xl text-rose-400"></i>
          <p className="text-rose-300">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors"
          >
            ხელახლა ცდა
          </button>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && !error && filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredPosts.map((post) => {
            const isCommentsOpen = activeCommentsPostId === post.id;

            return (
              <article
                key={post.id}
                className="bg-dark-900/80 hover:bg-dark-850/95 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-lg relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-800/60 pb-2">
                    <span className="text-tech-emerald">POST #{post.id}</span>
                    <span>AUTHOR ID: {post.userId}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white capitalize leading-snug hover:text-tech-emerald transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
                    {post.body}
                  </p>
                </div>

                {/* Footer Controls */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => toggleComments(post.id)}
                    className="text-tech-cyan hover:underline flex items-center gap-1.5 transition-colors"
                  >
                    <i className="fa-regular fa-comment-dots text-xs"></i>
                    <span>{isCommentsOpen ? 'კომენტარების დამალვა' : 'კომენტარები (GET /comments)'}</span>
                  </button>

                  <span className="text-[10px] text-slate-500">
                    JSONPlaceholder
                  </span>
                </div>

                {/* Comments Accordion */}
                {isCommentsOpen && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2.5 font-mono text-xs animate-fade-in">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>კომენტარები:</span>
                      {commentsLoading && <span>იტვირთება...</span>}
                    </div>

                    {!commentsLoading && comments.map((c) => (
                      <div key={c.id} className="p-2.5 rounded-xl bg-dark-950/80 border border-slate-800 text-[11px] space-y-1">
                        <div className="flex items-center justify-between text-tech-emerald">
                          <span className="font-semibold truncate max-w-[200px]">{c.name}</span>
                          <span className="text-slate-500 text-[10px]">{c.email}</span>
                        </div>
                        <p className="text-slate-300 font-sans leading-relaxed">
                          {c.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Empty Search Result */}
      {!loading && !error && filteredPosts.length === 0 && (
        <div className="py-16 text-center text-slate-400 bg-dark-900/40 rounded-2xl border border-slate-800/80 font-mono text-xs">
          <i className="fa-regular fa-folder-open text-2xl text-slate-500 mb-2"></i>
          <p>სტატია მოთხოვნით "{searchQuery}" ვერ მოიძებნა</p>
        </div>
      )}

      {/* Create Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-dark-900 border border-slate-800 rounded-3xl max-w-md w-full shadow-2xl animate-fade-in overflow-hidden font-mono text-xs">
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <i className="fa-regular fa-paper-plane text-tech-emerald"></i>
                  <span>ახალი სტატიის დამატება</span>
                </h3>
                <span className="text-[11px] text-slate-500">
                  HTTP POST /posts (JSONPlaceholder)
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="p-5 space-y-3.5">
              <div>
                <label className="block text-slate-300 mb-1">სათაური *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="მაგ: C++ vs Rust: Memory Safety in 2026"
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-emerald rounded-xl px-3 py-2 text-slate-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">ტექსტი / შინაარსი *</label>
                <textarea
                  required
                  rows="4"
                  value={newBody}
                  onChange={(e) => setNewBody(e.target.value)}
                  placeholder="დაწერეთ სტატიის შინაარსი..."
                  className="w-full bg-dark-950 border border-slate-800 focus:border-tech-emerald rounded-xl px-3 py-2 text-slate-200 outline-none resize-none font-sans text-xs sm:text-sm"
                ></textarea>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  გაუქმება
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-xl bg-tech-emerald text-dark-950 font-bold hover:bg-emerald-300 transition-colors"
                >
                  {submitting ? 'იგზავნება...' : 'გამოქვეყნება (POST)'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
