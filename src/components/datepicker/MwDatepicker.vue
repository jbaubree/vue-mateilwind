<script setup lang="ts">
import { SelectableDateType } from '@/types/datepicker'
const { locale } = useI18n()

const props = defineProps<{
  modelValue?: string
  label?: string
  defaultStep?: SelectableDateType
  months?: string[]
  days?: string[]
  formatOptions?: Intl.DateTimeFormatOptions
}>()

const months = ref<Array<string>>(props.months || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
const days = ref<Array<string>>(props.days || ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'])
const years = ref<Array<number>>([])
const currentSelection = ref<SelectableDateType>()
const showDatepicker = ref<boolean>(false)
const datepickerValue = ref<string>('')
const month = ref<number>(0)
const year = ref<number>(0)
const no_of_days = ref<Array<number>>([])
const blankdays = ref<Array<number>>([])

const emit = defineEmits<{
  (eventName: 'update:modelValue', value: string): void
}>()
const rDatepicker = ref<HTMLDivElement>()
onClickOutside(rDatepicker, (): void => {
  showDatepicker.value = false
  setCurrentSelection()
  initDate()
  setNoOfDays()
})

watch((locale), () => {
  initDate()
})

const formatter = computed((): Intl.DateTimeFormat => new Intl.DateTimeFormat(locale.value, props.formatOptions || {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}))

function initDate(): void {
  const date = props.modelValue ? new Date(props.modelValue) : new Date()
  month.value = date.getMonth()
  year.value = date.getFullYear()
  if (props.modelValue)
    datepickerValue.value = formatter.value.format(date)
}

function setNoOfDays(): void {
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
  const dayOfWeek = new Date(year.value, month.value).getDay()

  const blankdaysArray: number[] = []
  for (let i = 1; i <= dayOfWeek; i++)
    blankdaysArray.push(i)

  const daysArray: number[] = []
  for (let i = 1; i <= daysInMonth; i++)
    daysArray.push(i)

  blankdays.value = blankdaysArray
  no_of_days.value = daysArray
}

function setYears() {
  let startingYear = Math.ceil(year.value / 10) * 10

  const yearsArray: number[] = []
  for (let i = 0; i < 11; i++, startingYear--)
    yearsArray.push(startingYear)

  years.value = yearsArray.reverse()
}

function onDayClick(date: number): void {
  const selectedDate = new Date(year.value, month.value, date)
  const isoSelectedDate = selectedDate.toISOString()
  datepickerValue.value = formatter.value.format(selectedDate)
  emit('update:modelValue', isoSelectedDate)
  showDatepicker.value = false
}

function setMonth(monthIndex: number) {
  month.value = monthIndex
  currentSelection.value = 'day'
  setNoOfDays()
}

function setYear(y: number) {
  year.value = y
  currentSelection.value = 'month'
}

function isToday(date: number): boolean {
  const today = new Date().toDateString()
  const d = new Date(year.value, month.value, date).toDateString()
  return today === d
}

function isSelectedDate(date: number): boolean {
  const selectedDate = new Date(year.value, month.value, date).toISOString()
  return props.modelValue === selectedDate
}

function onPreviousButtonClick(): void {
  if (currentSelection.value === 'day') {
    if (month.value === 0) {
      month.value = 11
      year.value--
    }
    else {
      month.value--
    }
    setNoOfDays()
  }
  if (currentSelection.value === 'month') {
    year.value--
    setNoOfDays()
  }
  if (currentSelection.value === 'year') {
    year.value -= 10
    setYears()
  }
}

function onNextButtonClick(): void {
  if (currentSelection.value === 'day') {
    if (month.value === 11) {
      month.value = 0
      year.value++
    }
    else {
      month.value++
    }
    setNoOfDays()
  }
  if (currentSelection.value === 'month') {
    year.value++
    setNoOfDays()
  }
  if (currentSelection.value === 'year') {
    year.value += 10
    setYears()
  }
}

function onTitleClick(): void {
  if (currentSelection.value === 'day') {
    currentSelection.value = 'month'
  }
  else if (currentSelection.value === 'month') {
    currentSelection.value = 'year'
    setYears()
  }
}

function onTodayButtonClick(): void {
  const today = new Date()
  setYear(today.getFullYear())
  setMonth(today.getMonth())
}

function onClearButtonClick(): void {
  emit('update:modelValue', '')
  datepickerValue.value = ''
  nextTick(() => {
    setCurrentSelection()
    showDatepicker.value = false
    initDate()
    setNoOfDays()
  })
}

function setCurrentSelection() {
  currentSelection.value = props.defaultStep || 'day'
}
onMounted(() => {
  setCurrentSelection()
  initDate()
  setYears()
  setNoOfDays()
})
</script>
<template>
  <div class="relative">
    <MwInput
      v-model="datepickerValue"
      type="text"
      :label="label"
      @click="showDatepicker = !showDatepicker"
      @keydown.escape="showDatepicker = false"
    >
      <template #icon>
        <CarbonCalendar />
      </template>
    </MwInput>

    <transition name="slide-in-up">
      <div
        v-if="showDatepicker"
        ref="rDatepicker"
        class="z-10 bg-white mt-12 rounded-lg shadow-md p-4 absolute top-0 left-0 min-w-70"
        :class="{ 'w-full': currentSelection !== 'day' }"
      >
        <div class="flex justify-between items-center mb-4">
          <MwButton variant="light" has-icon size="sm" @click="onPreviousButtonClick()">
            <svg
              class="h-6 w-6 text-gray-500 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </MwButton>
          <MwButton
            v-if="currentSelection !== 'year'"
            variant="light"
            size="sm"
            @click="onTitleClick()"
          >
            <span
              v-if="currentSelection === 'day'"
              class="text-lg font-bold text-gray-800 mr-1"
            >{{ months[month] }}</span>
            <span class="text-lg text-gray-600 font-normal">{{ year }}</span>
          </MwButton>
          <MwButton variant="light" has-icon size="sm" @click="onNextButtonClick()">
            <svg
              class="h-6 w-6 text-gray-500 inline-flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </MwButton>
        </div>

        <template v-if="currentSelection === 'day'">
          <div class="flex flex-wrap mb-3 -mx-1">
            <template v-for="day in days" :key="day">
              <div style="width: 14.28%" class="px-1">
                <div class="text-gray-800 font-medium text-center text-xs">
                  {{ day.substr(0, 3) }}
                </div>
              </div>
            </template>
          </div>
          <div class="flex flex-wrap -mx-1 mb-4">
            <div
              v-for="blankday, index in blankdays"
              :key="index"
              style="width: 14.28%"
              class="text-center border p-1 border-transparent text-sm opacity-0"
            >
              {{ blankday }}
            </div>
            <template v-for="date in no_of_days" :key="date">
              <div style="width: 14.28%;" class="px-1 mb-1">
                <MwButton
                  variant="light-primary"
                  class="rounded-full text-gray-700 flex justify-center"
                  is-block
                  :class="{
                    '!bg-primary-500 !text-white': isSelectedDate(date),
                    'border border-primary-300': isToday(date) && !isSelectedDate(date),
                  }"
                  @click="onDayClick(date)"
                >
                  {{ date }}
                </MwButton>
              </div>
            </template>
          </div>
        </template>
        <template v-else-if="currentSelection === 'month'">
          <div class="flex flex-wrap -mx-1">
            <template v-for="monthNumber, index in months" :key="index">
              <div style="width: 25%" class="px-1 mb-1">
                <MwButton
                  variant="light-primary"
                  class="px-1 mb-1 rounded-full text-gray-700"
                  is-block
                  @click="setMonth(index)"
                >
                  {{ monthNumber.substr(0, 3) }}
                </MwButton>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div class="flex flex-wrap -mx-1">
            <template v-for="yearNumber in years" :key="yearNumber">
              <div style="width: 25%" class="px-1 mb-1">
                <MwButton
                  variant="light-primary"
                  class="px-1 mb-1 rounded-full text-gray-700"
                  is-block
                  @click="setYear(yearNumber)"
                >
                  {{ yearNumber }}
                </MwButton>
              </div>
            </template>
          </div>
        </template>
        <div class="flex justify-between">
          <MwButton variant="primary" @click="onTodayButtonClick()">
            {{ $t('datepicker.today') }}
          </MwButton>
          <MwButton is-outlined @click="onClearButtonClick()">
            {{ $t('datepicker.clear') }}
          </MwButton>
        </div>
      </div>
    </transition>
  </div>
</template>
