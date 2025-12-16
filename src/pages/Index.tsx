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
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/files/Screenshot_20251211-132553_Chrome.jpg)',
          zIndex: 0
        }}
      />
      <div className="fixed inset-0 bg-white/30" style={{ zIndex: 1 }} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Сделай красиво!
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
                  {section === 'about' && 'О компании'}
                  {section === 'price' && 'Цены'}
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

      <section id="home" className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-6xl md:text-8xl font-bold leading-tight text-foreground">
              Визуальная магия
              <span className="block text-primary mt-2">для бизнеса</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Превращаем витрины в произведения искусства
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Начать проект
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                Услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Комплексные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="group hover:border-primary transition-all p-8"
              >
                <CardHeader className="p-0">
                  <Icon name={service.icon as any} size={32} className="text-primary mb-4" />
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">О компании</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Мы — команда креативных дизайнеров и мастеров декора с более чем 10-летним опытом работы.
              </p>
              <p>
                Наша миссия — делать бизнес заметнее через эмоциональное оформление пространств.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">10</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Прайс</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {prices.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-8 border border-border hover:border-primary transition-all rounded-lg"
              >
                <div className="text-lg">{item.service}</div>
                <div className="text-2xl font-bold text-primary">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-32 relative z-10">
        <div className="absolute inset-0 bg-white/40 -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6">
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground">"{review.text}"</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h2>
              <p className="text-xl text-muted-foreground">Свяжемся в течение часа</p>
            </div>

            <Card>
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

                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-16 space-y-8 text-center">
              <div>
                <div className="text-sm text-muted-foreground mb-4">Менеджеры проекта</div>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold">Наталья</div>
                    <a href="tel:+79219224400" className="text-lg text-primary hover:underline">+7 (921) 922-44-00</a>
                  </div>
                  <div>
                    <div className="font-semibold">Мария</div>
                    <a href="tel:+79313573080" className="text-lg text-primary hover:underline">+7 (931) 357-30-80</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Сделай красиво!
            </h3>
            <p className="text-muted-foreground">&copy; 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;