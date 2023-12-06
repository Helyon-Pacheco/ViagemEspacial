export default function ({ store, redirect }) {
  // Se o usuário não estiver autenticado
  if (!store.state.authenticated) {
    return redirect('/login');
  }
}
