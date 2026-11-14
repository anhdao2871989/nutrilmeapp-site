  (function () {
    // Public client values: the same publishable key ships inside the app.
    var SUPABASE_URL = "https://iafwmpajzvsdaosfilnb.supabase.co";
    var SUPABASE_KEY = "sb_publishable_dN496bijJFnN7PSOVnSR4Q_1ALGZogb";

    var T = {
      en: { title: "Choose a new password", intro: "Enter a new password for your Nutril Me account.", new: "New password", again: "Repeat new password", hint: "At least 8 characters.", save: "Save new password", short: "Your password needs at least 8 characters.", mismatch: "The two passwords don't match.", fail: "Couldn't save the new password. Please try again, or request a new link in the app.", weak: "Your password is too weak. Try a new password.", doneTitle: "Password updated", doneBody: "Open Nutril Me and sign in with your email and new password.", open: "Open Nutril Me", badTitle: "This link has expired", badBody: "Reset links work once and only for a short time. In the app, go to Sign in and tap \"Forgot password?\" to get a new one." },
      es: { title: "Elige una contraseña nueva", intro: "Escribe una contraseña nueva para tu cuenta de Nutril Me.", new: "Contraseña nueva", again: "Repite la contraseña nueva", hint: "Al menos 8 caracteres.", save: "Guardar contraseña", short: "La contraseña necesita al menos 8 caracteres.", mismatch: "Las dos contraseñas no coinciden.", fail: "No se pudo guardar la contraseña. Inténtalo de nuevo o pide un enlace nuevo en la app.", weak: "Tu contraseña es demasiado débil. Prueba con otra.", doneTitle: "Contraseña actualizada", doneBody: "Abre Nutril Me e inicia sesión con tu correo y tu contraseña nueva.", open: "Abrir Nutril Me", badTitle: "Este enlace ha caducado", badBody: "Los enlaces solo funcionan una vez y por poco tiempo. En la app, ve a Iniciar sesión y toca «¿Olvidaste tu contraseña?» para recibir uno nuevo." },
      fr: { title: "Choisissez un nouveau mot de passe", intro: "Saisissez un nouveau mot de passe pour votre compte Nutril Me.", new: "Nouveau mot de passe", again: "Répétez le nouveau mot de passe", hint: "Au moins 8 caractères.", save: "Enregistrer", short: "Le mot de passe doit contenir au moins 8 caractères.", mismatch: "Les deux mots de passe ne correspondent pas.", fail: "Impossible d'enregistrer le mot de passe. Réessayez ou demandez un nouveau lien dans l'app.", weak: "Votre mot de passe est trop faible. Essayez-en un autre.", doneTitle: "Mot de passe mis à jour", doneBody: "Ouvrez Nutril Me et connectez-vous avec votre e-mail et votre nouveau mot de passe.", open: "Ouvrir Nutril Me", badTitle: "Ce lien a expiré", badBody: "Les liens ne fonctionnent qu'une fois et peu de temps. Dans l'app, allez dans Connexion et touchez « Mot de passe oublié ? » pour en recevoir un nouveau." },
      vi: { title: "Chọn mật khẩu mới", intro: "Nhập mật khẩu mới cho tài khoản Nutril Me của bạn.", new: "Mật khẩu mới", again: "Nhập lại mật khẩu mới", hint: "Ít nhất 8 ký tự.", save: "Lưu mật khẩu mới", short: "Mật khẩu cần ít nhất 8 ký tự.", mismatch: "Hai mật khẩu không khớp.", fail: "Không lưu được mật khẩu. Hãy thử lại hoặc yêu cầu liên kết mới trong ứng dụng.", weak: "Mật khẩu của bạn quá yếu. Hãy thử mật khẩu khác.", doneTitle: "Đã cập nhật mật khẩu", doneBody: "Mở Nutril Me và đăng nhập bằng email cùng mật khẩu mới.", open: "Mở Nutril Me", badTitle: "Liên kết đã hết hạn", badBody: "Liên kết chỉ dùng được một lần và trong thời gian ngắn. Trong ứng dụng, vào Đăng nhập và nhấn \"Quên mật khẩu?\" để nhận liên kết mới." },
      zh: { title: "设置新密码", intro: "为你的 Nutril Me 账户输入新密码。", new: "新密码", again: "再次输入新密码", hint: "至少 8 个字符。", save: "保存新密码", short: "密码至少需要 8 个字符。", mismatch: "两次输入的密码不一致。", fail: "无法保存新密码。请重试，或在 App 中重新获取链接。", weak: "你的密码强度太弱。请换一个新密码。", doneTitle: "密码已更新", doneBody: "打开 Nutril Me，用邮箱和新密码登录。", open: "打开 Nutril Me", badTitle: "链接已过期", badBody: "重置链接只能使用一次且有效期很短。请在 App 的登录页点“忘记密码？”获取新链接。" },
      ja: { title: "新しいパスワードを設定", intro: "Nutril Me アカウントの新しいパスワードを入力してください。", new: "新しいパスワード", again: "新しいパスワード（確認）", hint: "8 文字以上。", save: "新しいパスワードを保存", short: "パスワードは 8 文字以上にしてください。", mismatch: "2 つのパスワードが一致しません。", fail: "パスワードを保存できませんでした。もう一度お試しいただくか、アプリで新しいリンクをリクエストしてください。", weak: "パスワードが弱すぎます。別のパスワードをお試しください。", doneTitle: "パスワードを更新しました", doneBody: "Nutril Me を開き、メールアドレスと新しいパスワードでログインしてください。", open: "Nutril Me を開く", badTitle: "このリンクは期限切れです", badBody: "リンクは 1 回のみ、短時間だけ有効です。アプリのログイン画面で「パスワードをお忘れですか？」をタップして新しいリンクを受け取ってください。" },
      ko: { title: "새 비밀번호 설정", intro: "Nutril Me 계정의 새 비밀번호를 입력하세요.", new: "새 비밀번호", again: "새 비밀번호 다시 입력", hint: "8자 이상.", save: "새 비밀번호 저장", short: "비밀번호는 8자 이상이어야 합니다.", mismatch: "두 비밀번호가 일치하지 않습니다.", fail: "비밀번호를 저장하지 못했습니다. 다시 시도하거나 앱에서 새 링크를 요청하세요.", weak: "비밀번호가 너무 약합니다. 다른 비밀번호를 사용해 보세요.", doneTitle: "비밀번호가 변경되었습니다", doneBody: "Nutril Me를 열고 이메일과 새 비밀번호로 로그인하세요.", open: "Nutril Me 열기", badTitle: "링크가 만료되었습니다", badBody: "재설정 링크는 한 번만, 짧은 시간 동안만 작동합니다. 앱의 로그인 화면에서 \"비밀번호를 잊으셨나요?\"를 눌러 새 링크를 받으세요." },
      hi: { title: "नया पासवर्ड चुनें", intro: "अपने Nutril Me खाते के लिए नया पासवर्ड डालें।", new: "नया पासवर्ड", again: "नया पासवर्ड फिर से डालें", hint: "कम से कम 8 अक्षर।", save: "नया पासवर्ड सहेजें", short: "पासवर्ड में कम से कम 8 अक्षर होने चाहिए।", mismatch: "दोनों पासवर्ड मेल नहीं खाते।", fail: "नया पासवर्ड सहेजा नहीं जा सका। फिर से कोशिश करें, या ऐप में नया लिंक माँगें।", weak: "आपका पासवर्ड बहुत कमज़ोर है। कोई नया पासवर्ड आज़माएँ।", doneTitle: "पासवर्ड बदल गया", doneBody: "Nutril Me खोलें और अपने ईमेल और नए पासवर्ड से साइन इन करें।", open: "Nutril Me खोलें", badTitle: "इस लिंक की समय सीमा खत्म हो गई", badBody: "रीसेट लिंक एक ही बार और थोड़ी देर के लिए काम करते हैं। ऐप में साइन इन पर जाकर \"पासवर्ड भूल गए?\" पर टैप करें।" },
      ar: { title: "اختر كلمة مرور جديدة", intro: "أدخل كلمة مرور جديدة لحسابك في Nutril Me.", new: "كلمة المرور الجديدة", again: "أعد إدخال كلمة المرور الجديدة", hint: "8 أحرف على الأقل.", save: "حفظ كلمة المرور", short: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.", mismatch: "كلمتا المرور غير متطابقتين.", fail: "تعذّر حفظ كلمة المرور. حاول مرة أخرى أو اطلب رابطًا جديدًا من التطبيق.", weak: "كلمة المرور ضعيفة جدًا. جرّب كلمة مرور جديدة.", doneTitle: "تم تحديث كلمة المرور", doneBody: "افتح Nutril Me وسجّل الدخول ببريدك الإلكتروني وكلمة المرور الجديدة.", open: "افتح Nutril Me", badTitle: "انتهت صلاحية هذا الرابط", badBody: "روابط إعادة التعيين تعمل مرة واحدة ولوقت قصير. في التطبيق، افتح تسجيل الدخول واضغط \"هل نسيت كلمة المرور؟\" للحصول على رابط جديد." },
      ru: { title: "Новый пароль", intro: "Введите новый пароль для аккаунта Nutril Me.", new: "Новый пароль", again: "Повторите новый пароль", hint: "Не менее 8 символов.", save: "Сохранить пароль", short: "Пароль должен быть не короче 8 символов.", mismatch: "Пароли не совпадают.", fail: "Не удалось сохранить пароль. Попробуйте снова или запросите новую ссылку в приложении.", weak: "Пароль слишком простой. Попробуйте другой.", doneTitle: "Пароль обновлён", doneBody: "Откройте Nutril Me и войдите с email и новым паролем.", open: "Открыть Nutril Me", badTitle: "Срок действия ссылки истёк", badBody: "Ссылка работает один раз и недолго. В приложении откройте «Вход» и нажмите «Забыли пароль?», чтобы получить новую." }
    };
    var lang = (navigator.language || "en").slice(0, 2).toLowerCase();
    var t = T[lang] || T.en;
    document.documentElement.lang = T[lang] ? lang : "en";
    if (lang === "ar") document.documentElement.dir = "rtl";
    document.title = t.title + " | Nutril Me";
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t[el.getAttribute("data-t")]; });

    function show(id) {
      ["form-view", "done-view", "bad-view"].forEach(function (v) { document.getElementById(v).hidden = v !== id; });
    }

    // An expired or used link arrives with error details instead of a session.
    var frag = new URLSearchParams(location.hash.replace(/^#/, ""));
    var query = new URLSearchParams(location.search);
    if (frag.get("error") || frag.get("error_code") || query.get("error")) {
      history.replaceState(null, "", location.pathname);
      return show("bad-view");
    }
    if (!window.supabase) return show("bad-view");

    var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { flowType: "implicit", detectSessionInUrl: true, persistSession: false, autoRefreshToken: false }
    });

    client.auth.getSession().then(function (res) {
      // The recovery tokens are in memory now: take them out of the address bar and history.
      history.replaceState(null, "", location.pathname);
      if (!res.data || !res.data.session) return show("bad-view");
      show("form-view");
    });

    var form = document.getElementById("reset-form");
    var err = document.getElementById("form-error");
    var save = document.getElementById("save");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var a = document.getElementById("pw1").value, b = document.getElementById("pw2").value;
      err.hidden = true;
      if (a.length < 8) { err.textContent = t.short; err.hidden = false; return; }
      if (a !== b) { err.textContent = t.mismatch; err.hidden = false; return; }
      save.disabled = true;
      client.auth.updateUser({ password: a }).then(function (res) {
        save.disabled = false;
        if (res.error) {
          // A password the project's policy refuses (too short or simple, or found in a known
          // data breach) comes back as "weak_password"; anything else keeps the general message.
          var weak = res.error.code === "weak_password" || res.error.name === "AuthWeakPasswordError";
          console.warn("password update failed", res.error.code || res.error.name);
          err.textContent = weak ? t.weak : t.fail; err.hidden = false; return;
        }
        client.auth.signOut({ scope: "local" });
        show("done-view");
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) document.getElementById("open-app").hidden = false;
      });
    });
  })();
