import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');

  const holidays = [
    { id: 'new-year', name: 'Новый год', icon: 'Sparkles' },
    { id: 'spring', name: 'Весенние праздники', icon: 'Flower2' },
    { id: 'summer', name: 'Летний сезон', icon: 'Sun' },
    { id: 'autumn', name: 'Осенние мотивы', icon: 'Leaf' },
    { id: 'halloween', name: 'Halloween', icon: 'Ghost' },
    { id: 'valentine', name: 'День Святого Валентина', icon: 'Heart' },
    { id: 'easter', name: 'Пасха', icon: 'Egg' },
    { id: 'black-friday', name: 'Black Friday', icon: 'ShoppingBag' },
  ];

  const services = [
    {
      title: 'Декор витрин',
      description: 'Создаём уникальные композиции для привлечения клиентов',
      icon: 'Store',
      color: 'bg-primary',
    },
    {
      title: 'Сезонное оформление',
      description: 'Адаптируем пространство под каждый сезон и праздник',
      icon: 'Calendar',
      color: 'bg-secondary',
    },
    {
      title: 'Корпоративный стиль',
      description: 'Подчёркиваем индивидуальность вашего бренда',
      icon: 'Sparkles',
      color: 'bg-accent',
    },
    {
      title: 'Монтаж и демонтаж',
      description: 'Быстрая установка и снятие декораций',
      icon: 'Wrench',
      color: 'bg-primary',
    },
  ];

  const prices = [
    { service: 'Базовое оформление витрины', price: 'от 15 000 ₽' },
    { service: 'Премиум декор с авторским дизайном', price: 'от 35 000 ₽' },
    { service: 'Сезонное переоформление', price: 'от 20 000 ₽' },
    { service: 'Консультация и разработка концепции', price: 'от 5 000 ₽' },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      business: 'Владелец бутика',
      text: 'Витрина преобразилась! Продажи выросли на 40% за первый месяц.',
      rating: 5,
    },
    {
      name: 'Дмитрий Соколов',
      business: 'Ресторан "Вкус"',
      text: 'Креативный подход и внимание к деталям. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Мария Иванова',
      business: 'Салон красоты',
      text: 'Профессионально, в срок и с душой. Буду обращаться снова.',
      rating: 5,
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    holiday: '',
    deadline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', email: '', holiday: '', deadline: '', message: '' });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ДЕКОР PRO
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'about', 'price', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'price' && 'Прайс'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              Заказать декор
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Визуальная
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  магия
                </span>
                для бизнеса
              </h2>
              <p className="text-xl text-muted-foreground">
                Превращаем обычные витрины в произведения искусства. Увеличиваем поток клиентов через эмоциональное оформление.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg">
                  Начать проект
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent rounded-[3rem] -rotate-6 opacity-20" />
                <div className="relative bg-card rounded-[3rem] p-8 shadow-2xl border border-border">
                  <div className="grid grid-cols-2 gap-4">
                    {holidays.slice(0, 4).map((holiday, idx) => (
                      <div
                        key={holiday.id}
                        className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 hover:scale-105 transition-transform"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <Icon name={holiday.icon as any} size={40} className="text-primary mb-3" />
                        <p className="font-semibold text-sm">{holiday.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для создания незабываемого визуального опыта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Мы — команда креативных дизайнеров и мастеров декора с более чем 10-летним опытом работы в индустрии визуального оформления.
                </p>
                <p>
                  Наша миссия — делать бизнес наших клиентов заметнее через эмоциональное и атмосферное оформление пространств. Каждый проект — это уникальная история, рассказанная через декор.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm">Проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">10</div>
                    <div className="text-sm">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">98%</div>
                    <div className="text-sm">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] opacity-20 absolute inset-0 rotate-3" />
              <div className="aspect-[4/3] bg-card rounded-[3rem] relative overflow-hidden border-2 border-border shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Award" size={120} className="text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены на наши услуги</p>
          </div>

          <Card className="max-w-3xl mx-auto animate-scale-in">
            <CardContent className="p-0">
              {prices.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-6 ${
                    idx !== prices.length - 1 ? 'border-b' : ''
                  } hover:bg-muted/50 transition-colors`}
                >
                  <div className="font-medium">{item.service}</div>
                  <div className="text-xl font-bold text-primary">{item.price}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.business}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать декор</h2>
              <p className="text-xl text-muted-foreground">Заполните форму, и мы свяжемся с вами в течение часа</p>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="holiday">Тип праздника / события *</Label>
                    <Select required value={formData.holiday} onValueChange={(value) => setFormData({ ...formData, holiday: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите праздник" />
                      </SelectTrigger>
                      <SelectContent>
                        {holidays.map((holiday) => (
                          <SelectItem key={holiday.id} value={holiday.id}>
                            {holiday.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Желаемый срок выполнения *</Label>
                    <Input
                      id="deadline"
                      type="date"
                      required
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о ваших пожеланиях..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground">info@decorpro.ru</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">Адрес</div>
                  <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                ДЕКОР PRO
              </h3>
              <p className="text-muted-foreground">Визуальная магия для вашего бизнеса</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Декор витрин</li>
                <li>Сезонное оформление</li>
                <li>Корпоративный стиль</li>
                <li>Монтаж и демонтаж</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ДЕКОР PRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
